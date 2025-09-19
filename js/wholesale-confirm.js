document.addEventListener("DOMContentLoaded", function () {
  // このフォームだけを対象にする
  const root = document.querySelector("#wholesale-form");
  if (!root) return;

  // CF7が生成する実フォーム
  const form = root.querySelector(".wpcf7 form");
  if (!form) return;

  // モーダル（元フォームと同じ構造/IDで統一）
  const modal = root.querySelector("#cf7-confirm-modal");
  if (!modal) return;

  // “入力内容の確認”ボタン
  const openBtn =
    root.querySelector(".js-open-confirm") ||
    root.querySelector(".submit-wrap button[type='submit']");
  if (!openBtn) return;

  const overlay = modal.querySelector(".cf7-modal__overlay.js-close-confirm");
  const closeBtns = modal.querySelectorAll(".js-close-confirm");

  // -------- helpers --------
  const getByName = (name) => form.querySelector(`[name="${name}"]`);
  const getValByName = (name) => (getByName(name)?.value || "").trim();
  const setText = (key, val) => {
    const el = modal.querySelector(`[data-confirm="${key}"]`);
    if (el) el.innerHTML = val && String(val).length ? val : "—";
  };
  const getCheckedValues = (base) =>
    Array.from(
      form.querySelectorAll(`input[name="${base}"], input[name="${base}[]"]`)
    )
      .filter((i) => i.checked)
      .map((i) => i.value);

  // 必須チェック（CF7のクラス＋メール一致）
  function validateCF7Required(f) {
    f.querySelectorAll(".cf7-invalid").forEach((el) =>
      el.classList.remove("cf7-invalid")
    );

    const reqRoots = f.querySelectorAll(
      ".wpcf7-validates-as-required, .wpcf7-acceptance"
    );
    const groups = new Map();

    reqRoots.forEach((rootEl) => {
      const ctrl = rootEl.matches("input,select,textarea")
        ? rootEl
        : rootEl.querySelector("input,select,textarea");
      if (!ctrl) return;
      const nm = ctrl.name || "";
      if (!nm || nm.startsWith("_")) return;
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

    // メール一致（両方入力時のみ厳密）
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

  // モーダルへ値流し込み（卸販売フォームの項目）
  function fillModal() {
    setText("type", getCheckedValues("type").join("、"));
    setText("warehouse", getCheckedValues("warehouse").join("、"));
    setText("items", getCheckedValues("items").join("、"));

    setText("company_name", getValByName("company_name"));
    setText("postal_code", getValByName("postal_code"));
    setText("address", getValByName("address"));
    setText("name", getValByName("name"));
    setText("name_kana", getValByName("name_kana"));
    setText("tel", getValByName("tel"));

    const email = getValByName("your-email");
    const email2 = getValByName("your-email-confirm");
    if (email && email2 && email !== email2) return false;
    setText("email", email);

    const msg = (getByName("message")?.value || "").replace(/\n/g, "<br>");
    setText("message", msg);

    return true;
  }

  function openModal() {
    modal.hidden = false;
    modal.setAttribute("aria-hidden", "false");
    document.body.classList.add("no-scroll");
  }
  function closeModal() {
    modal.hidden = true;
    modal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("no-scroll");
  }

  // “入力内容の確認” クリックで送信を止めてモーダル
  openBtn.addEventListener("click", function (e) {
    if (openBtn.type === "submit") e.preventDefault();
    if (!validateCF7Required(form)) return;
    if (!fillModal()) return;
    openModal();
  });

  overlay?.addEventListener("click", closeModal);
  closeBtns.forEach((btn) => btn.addEventListener("click", closeModal));

  // 送信はモーダル内の [submit] に任せる（CF7側の Ajax 送信が走る）
  // ここでは .js-confirm-submit は使いません（元フォームに合わせて統一）
});
