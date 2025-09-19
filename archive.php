<?php get_header(); ?>

  <main>

    <div class="under-head">
      <div class="fv img-box">
        <picture>
          <source srcset="<?php echo get_template_directory_uri(); ?>/images/archive/under_head-kv_archive_sp.jpg" media="(max-width: 750px)">
          <img src="<?php echo get_template_directory_uri(); ?>/images/archive/under_head-kv_archive.jpg" alt="">
        </picture>
      </div>
      <div class="kv_ttl-wrap">
        <div class="en-ttl">News</div>
        <h1>お知らせ</h1>
      </div>
    </div>

    <?php get_template_part('inc/breadcrumb'); ?>

    <div class="archive_wrap contents-wrap bg-noise">

      <div class="inner">

        <?php get_template_part('inc/sidebar'); ?>

        <div class="main-contents">

          <div class="cate-acord_wrap u-sp">
            <div class="ttl-wrap">
              <h2>Category</h2>
            </div>
            <?php
            // 現在のカテゴリを取得
            $current_category = get_queried_object();
            $current_cat_name = 'All';
            $current_cat_id = 0;
            if (is_category()) {
              $current_cat_name = $current_category->name;
              $current_cat_id = $current_category->term_id;
            }
            // すべてのカテゴリを取得
            $categories = get_categories(array(
              'hide_empty' => true,
              'exclude' => $current_cat_id
            ));
            ?>
            <div class="cate-acord">
              <p class="cate_accordion-trigger">
              <?php echo esc_html($current_cat_name); ?>
              <svg xmlns="http://www.w3.org/2000/svg" width="19.202" height="29.99" viewBox="0 0 19.202 29.99">
                <g id="icon-arrow03" transform="translate(111.286 29.99) rotate(180)">
                <path id="パス_10719" data-name="パス 10719"
                  d="M111.286,4.207,107.079,0,92.084,15,107.079,29.99l4.207-4.207L100.5,15Z" fill="#fff" />
                </g>
              </svg>
              </p>
              <ul class="accordion-hide">
              <?php if (is_category()) : ?>
                <li><a href="<?php echo home_url('/news'); ?>">All</a></li>
              <?php endif; ?>
              <?php foreach ($categories as $category) : ?>
                <li><a href="<?php echo esc_url(get_category_link($category->term_id)); ?>"><?php echo esc_html($category->name); ?></a></li>
              <?php endforeach; ?>
              </ul>
            </div>
          </div>

          <div class="archive-list">

            <span class="circle"></span>

            <?php if(have_posts()): while(have_posts()): the_post(); ?>
              <dl class="text-ell-line02">
                <dt>
                  <div class="img-box obj-fit">
                    <?php
                      if ( has_post_thumbnail() ) {
                          // アイキャッチ画像が設定されている場合に実行するコード
                          echo '<img src="' . get_the_post_thumbnail_url() . '" alt="' . get_the_title() . '">';
                      } else {
                          // アイキャッチ画像が設定されていない場合に実行するコード
                          echo '<img src="' . get_bloginfo( 'stylesheet_directory' ) . '/images/common/eyecatch-noimage.jpg" />'; 
                      }
                    ?>
                  </div>
                </dt>
                <dd>
                  <div>
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
                  <p class="ttl"><?php the_title(); ?></p>
                  <a class="btn02" href="<?php the_permalink(); ?>">
                    View More
                    <svg xmlns="http://www.w3.org/2000/svg" width="16.003" height="16.003" viewBox="0 0 16.003 16.003">
                      <path id="icon-arrow02"
                        d="M13669,13259a8,8,0,1,1,8-8A8.01,8.01,0,0,1,13669,13259Zm-1.312-11.645h0l-1.023,1.023,2.623,2.618-2.623,2.623,1.023,1.022,3.646-3.646-3.646-3.642Z"
                        transform="translate(-13660.998 -13242.998)" fill="#d87159" />
                    </svg>
                  </a>
                </dd>
              </dl>
            <?php endwhile;endif;wp_reset_query(); ?>

            <!-- <nav class="navigation pagination">
            <p>【Pagenation】wordpress時に実装します。</p>
          </nav> -->
          <?php
            $args = array(
              'mid_size' => 1,
              'prev_text' => '<svg xmlns="http://www.w3.org/2000/svg" width="19.202" height="29.99" viewBox="0 0 19.202 29.99">
  <g id="icon-arrow03" transform="translate(111.286 29.99) rotate(180)">
    <path id="パス_10719" data-name="パス 10719" d="M111.286,4.207,107.079,0,92.084,15,107.079,29.99l4.207-4.207L100.5,15Z" fill="#fff"/>
  </g>
</svg>',
              'next_text' => '<svg xmlns="http://www.w3.org/2000/svg" width="19.202" height="29.99" viewBox="0 0 19.202 29.99">
  <g id="icon-arrow03" transform="translate(111.286 29.99) rotate(180)">
    <path id="パス_10719" data-name="パス 10719" d="M111.286,4.207,107.079,0,92.084,15,107.079,29.99l4.207-4.207L100.5,15Z" fill="#fff"/>
  </g>
</svg>',
              'screen_reader_text' => ' ',
            );
            the_posts_pagination($args);
            ?>

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