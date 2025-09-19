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

      <section class="contact_wrap01 thanks bg-noise">
        <div class="inner">
          <h2>お問い合わせいただきありがとうございます</h2>
          <p>
            内容確認後、担当者より折り返しご連絡させていただきます。<br>
            48時間以内に連絡がない場合、メールがブロックされている恐れがありますので、<br>
            06-6251-0289まで直接お電話いただくか、<br>
            info@pig1999.comへ直接メールにてご連絡をお願いいたします。
          </p>
          <div class="btn-wrap"><a class="btn red" href="<?php echo home_url('/'); ?>">TOP</a></div>
        </div>
        <div class="logomark img-box"><img src="<?php echo get_template_directory_uri(); ?>/images/common/ashirai_logo-mark.svg" alt=""></div>
      </section>
    </div>

    <?php get_template_part('inc/cta-recruit'); ?>

  </main>

<?php get_footer(); ?>