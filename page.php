<?php get_header(); ?>
  <main>

    <div class="under-head">
      <div class="fv img-box">
        <picture>
          <source srcset="<?php echo get_template_directory_uri(); ?>/images/contact/under_head-kv_about_sp.jpg" media="(max-width: 750px)">
          <img src="<?php echo get_template_directory_uri(); ?>/images/contact/under_head-kv_about.jpg" alt="">
        </picture>
      </div>
      <div class="kv_ttl-wrap">
        <h1><?php the_title(); ?></h1>
      </div>
    </div>

    <?php get_template_part('inc/breadcrumb'); ?>

    <section class="bg-noise">
      <div class="inner">
        <div class="page-content">
          <?php the_content(); ?>
        </div>
      </div>
    </section>

    <?php get_template_part('inc/cta-recruit'); ?>

  </main>
<?php get_footer(); ?>