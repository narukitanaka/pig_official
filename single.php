<?php get_header(); ?>
  <main>

    <div class="under-head">
      <div class="fv img-box">
        <picture>
          <source srcset="<?php echo get_template_directory_uri(); ?>/images/single/under_head-kv_single_sp.jpg" media="(max-width: 750px)">
          <img src="<?php echo get_template_directory_uri(); ?>/images/single/under_head-kv_single.jpg" alt="">
        </picture>
      </div>
      <div class="kv_ttl-wrap">
        <div class="en-ttl">News</div>
        <h1>お知らせ</h1>
      </div>
    </div>

    <?php get_template_part('inc/breadcrumb'); ?>

    <div class="single_wrap contents-wrap bg-noise">

      <div class="inner">

        <?php get_template_part('inc/sidebar'); ?>

        <div class="main-contents">
          <div class="single-content">
            <div class="single-head">
              <div class="time-cate">
                <span class="time"><?php echo get_the_date(); ?></span>
                <span class="cate">
                  <?php
                  $categories = get_the_category();
                  if (!empty($categories)) {
                    echo esc_html($categories[0]->name);
                  }
                  ?>
                </span>
              </div>
              <div class="single-ttl"><?php the_title(); ?></div>
            </div>

            <div class="content">
              <?php the_content(); ?>
            </div>

            <div class="single-pagenation">
              <div class="pagenation-wrap">
                <?php
                $prev_post = get_previous_post();
                if (!empty($prev_post)) :
                ?>
                <div class="prev">
                  <a href="<?php echo get_permalink($prev_post->ID); ?>">
                    <svg xmlns="http://www.w3.org/2000/svg" width="19.202" height="29.99" viewBox="0 0 19.202 29.99">
                      <g id="icon-arrow03" transform="translate(111.286 29.99) rotate(180)">
                        <path id="パス_10719" data-name="パス 10719"
                          d="M111.286,4.207,107.079,0,92.084,15,107.079,29.99l4.207-4.207L100.5,15Z" fill="#fff" />
                      </g>
                    </svg>
                    Prev
                  </a>
                </div>
                <?php endif; ?>
                <div class="back"><a class="btn red" href="<?php echo home_url('/news'); ?>">Index</a></div>
                <?php
                  $next_post = get_next_post();
                  if (!empty($next_post)) :
                  ?>
                <div class="next">
                  <a href="<?php echo get_permalink($next_post->ID); ?>">
                    Next
                    <svg xmlns="http://www.w3.org/2000/svg" width="19.202" height="29.99" viewBox="0 0 19.202 29.99">
                      <g id="icon-arrow03" transform="translate(111.286 29.99) rotate(180)">
                        <path id="パス_10719" data-name="パス 10719"
                          d="M111.286,4.207,107.079,0,92.084,15,107.079,29.99l4.207-4.207L100.5,15Z" fill="#fff" />
                      </g>
                    </svg>
                  </a>
                </div>
                <?php endif; ?>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div class="logomark img-box"><img src="<?php echo get_template_directory_uri(); ?>/images/common/ashirai_logo-mark.svg" alt=""></div>
      <div class="vertical-txt img-box parallax y-200">
        <img src="<?php echo get_template_directory_uri(); ?>/images/common/vertical-txt_whats-news.svg" alt="">
      </div>

    </div>

    <?php get_template_part('inc/cta-recruit'); ?>


  </main>
<?php get_footer(); ?>