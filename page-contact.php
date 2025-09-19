<?php get_header(); ?>
  <main>

    <div class="under-head">
      <div class="fv img-box">
        <picture>
          <source srcset="<?php echo get_template_directory_uri(); ?>/images/contact/under_head-kv_contact_sp.jpg" media="(max-width: 750px)">
          <img src="<?php echo get_template_directory_uri(); ?>/images/contact/under_head-kv_contact.jpg" alt="">
        </picture>
      </div>
      <div class="kv_ttl-wrap">
        <div class="en-ttl">Contact</div>
        <h1>お問い合わせ</h1>
      </div>
    </div>

    <div class="hidden">
      <?php get_template_part('inc/breadcrumb'); ?>

      <section class="contact_wrap01 bg-noise">
        <div class="inner">
          <p>
            お問い合わせは、下記メールフォームよりお問い合わせください。<br>
            内容確認後、担当者より折り返しご連絡させていただきます。<br>
            48時間以内に連絡がない場合、メールがブロックされている恐れがありますので、<br>
            06-6251-0289まで直接お電話いただくか、<br>
            info@pig1999.comへ直接メールにてご連絡をお願いいたします。
          </p>
          <div class="contact-root">
            <div>
              <a href="<?php echo home_url('/wholesale#wholesale-form'); ?>">
                <div>Wholesale</div>
                <p>卸販売に関する<br>お問い合わせはこちら</p>
                <svg xmlns="http://www.w3.org/2000/svg" width="19.202" height="29.99" viewBox="0 0 19.202 29.99">
                  <g id="icon-arrow03" transform="translate(111.286 29.99) rotate(180)">
                    <path id="パス_10719" data-name="パス 10719"
                      d="M111.286,4.207,107.079,0,92.084,15,107.079,29.99l4.207-4.207L100.5,15Z" fill="#fff" />
                  </g>
                </svg>
              </a>
            </div>
            <div>
              <a target="_blank" href="#">
                <div>Recruit</div>
                <p>採用に関する<br>お問い合わせはこちら</p>
                <svg xmlns="http://www.w3.org/2000/svg" width="19.202" height="29.99" viewBox="0 0 19.202 29.99">
                  <g id="icon-arrow03" transform="translate(111.286 29.99) rotate(180)">
                    <path id="パス_10719" data-name="パス 10719"
                      d="M111.286,4.207,107.079,0,92.084,15,107.079,29.99l4.207-4.207L100.5,15Z" fill="#fff" />
                  </g>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div class="logomark img-box"><img src="<?php echo get_template_directory_uri(); ?>/images/common/ashirai_logo-mark.svg" alt=""></div>
      </section>
    </div>

    <section id="contact-form" class="contact_wrap02 bg-noise">
      <div class="inner">
        <div class="ttl-wrap">
          <h2>Contact Form</h2>
          <div class="sub-ttl">お問い合わせフォームはこちら</div>
        </div>

        <div class="form-wrap">
          <?php echo do_shortcode('[contact-form-7 id="96565a4" title="お問い合わせ"]'); ?>
        </div>

      </div>
      <div class="vertical-txt img-box">
        <img src="<?php echo get_template_directory_uri(); ?>/images/common/vertical-txt_contact-form.svg" alt="">
      </div>
    </section>

    <?php get_template_part('inc/cta-recruit'); ?>

  </main>
<?php get_footer(); ?>