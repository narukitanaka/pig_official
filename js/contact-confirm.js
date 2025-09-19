document.addEventListener("DOMContentLoaded", function () {
  // 対象フォーム（必要ならセレクタ調整）
  const form = document.querySelector("#contact-form .wpcf7 form");
  if (!form) return;

  const modal = form.querySelector("#cf7-confirm-modal");
  const openBtn = form.querySelector(".js-open-confirm");
  const overlay = modal?.querySelector(".cf7-modal__overlay");
  const closeBtns = modal?.querySelectorAll(".js-close-confirm") || [];

  // -------- helpers --------
  const getByName = (name) => form.querySelector(`[name="${name}"]`);
  const getValByName = (name) => (getByName(name)?.value || "").trim();
  const setText = (key, val) => {
    const el = modal?.querySelector(`[data-confirm="${key}"]`);
    if (el) el.innerHTML = val && String(val).length ? val : "—";
  };

  // CF7の必須チェック（.wpcf7-validates-as-required / .wpcf7-acceptance 両対応）
  function validateCF7Required(f) {
    // 既存ハイライト解除
    f.querySelectorAll(".cf7-invalid").forEach((el) =>
      el.classList.remove("cf7-invalid")
    );

    // 必須対象をラッパー/入力の両方から収集
    const reqRoots = f.querySelectorAll(
      ".wpcf7-validates-as-required, .wpcf7-acceptance"
    );

    // name単位でグループ化
    const groups = new Map();
    reqRoots.forEach((root) => {
      const ctrl = root.matches("input,select,textarea")
        ? root
        : root.querySelector("input,select,textarea");
      if (!ctrl) return;
      const nm = ctrl.name || "";
      if (!nm || nm.startsWith("_")) return; // CF7内部フィールドは除外
      const base = nm.replace(/\[\]$/, "");
      if (!groups.has(base)) groups.set(base, []);
      groups.get(base).push(ctrl);
    });

    let ok = true,
      first = null,
      alerted = false;

    groups.forEach((nodes, base) => {
      const head = nodes[0];
      let valid = true;

      if (head.type === "checkbox" || head.type === "radio") {
        // 同名グループの中で1つ以上チェック
        const group = f.querySelectorAll(
          `input[name="${base}"], input[name="${base}[]"]`
        );
        valid = Array.from(group).some((i) => i.checked);

        if (!valid) {
          const wrap =
            f.querySelector(`.wpcf7-form-control-wrap[data-name="${base}"]`) ||
            head.closest(".wpcf7-form-control-wrap") ||
            head.closest("label") ||
            head;
          wrap.classList.add("cf7-invalid");
          if (!first) first = head;
        }
      } else if (head.tagName === "SELECT") {
        valid = !!head.value;
        if (!valid) {
          (head.closest(".wpcf7-form-control-wrap") || head).classList.add(
            "cf7-invalid"
          );
          if (!first) first = head;
        }
      } else {
        valid = !!head.value.trim();
        if (!valid) {
          (head.closest(".wpcf7-form-control-wrap") || head).classList.add(
            "cf7-invalid"
          );
          if (!first) first = head;
        }
      }

      if (!valid) ok = false;
    });

    // メール一致チェック（両方が入力されている時だけ厳密比較）
    const email = getValByName("your-email");
    const email2 = getValByName("your-email-confirm");
    if (email && email2 && email !== email2) {
      ok = false;
      const conf = getByName("your-email-confirm");
      (conf?.closest(".wpcf7-form-control-wrap") || conf)?.classList.add(
        "cf7-invalid"
      );
      first = first || conf;
      alert("メールアドレスが一致しません。");
      alerted = true;
    }

    if (!ok && !alerted) {
      first?.focus();
      alert("必須項目が未入力です。入力内容をご確認ください。");
    }
    return ok;
  }

  // モーダル用：値の流し込み
  function fillModal(f, m) {
    // 種別（type[] or type）
    let types = Array.from(
      f.querySelectorAll('input[name="type[]"]:checked')
    ).map((i) => i.value);
    if (types.length === 0) {
      types = Array.from(f.querySelectorAll('input[name="type"]:checked')).map(
        (i) => i.value
      );
    }
    setText("type", types.join("、"));

    setText("company_name", getValByName("company_name"));
    setText("name", getValByName("name"));
    setText("name_kana", getValByName("name_kana"));
    setText("tel", getValByName("tel"));

    const email = getValByName("your-email");
    const email2 = getValByName("your-email-confirm");
    if (email !== email2) return false; // 不一致ならここでも停止
    setText("email", email);

    const msg = (getByName("message")?.value || "").replace(/\n/g, "<br>");
    setText("message", msg);

    return true;
  }

  function openModal(m) {
    m.hidden = false;
    m.setAttribute("aria-hidden", "false");
    document.body.classList.add("no-scroll");
  }
  function closeModal(m) {
    m.hidden = true;
    m.setAttribute("aria-hidden", "true");
    document.body.classList.remove("no-scroll");
  }

  // -------- events --------
  openBtn?.addEventListener("click", function () {
    if (!modal) return;
    if (!validateCF7Required(form)) return;
    if (!fillModal(form, modal)) return;
    openModal(modal);
  });

  overlay?.addEventListener("click", () => closeModal(modal));
  closeBtns.forEach((btn) =>
    btn.addEventListener("click", () => closeModal(modal))
  );

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal?.getAttribute("aria-hidden") === "false") {
      closeModal(modal);
    }
  });
});
