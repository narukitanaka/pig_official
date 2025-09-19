<?php get_header(); ?>
  <main>

    <div class="fv">
      <div class="fv_image img-box">
        <picture>
          <source srcset="<?php echo get_template_directory_uri(); ?>/images/top/fv_sp.jpg" media="(max-width: 750px)">
          <img src="<?php echo get_template_directory_uri(); ?>/images/top/fv_pc.jpg" alt="">
        </picture>
      </div>
      <div class="fv_text">
        <div class="main-copy">
          <picture>
            <source srcset="<?php echo get_template_directory_uri(); ?>/images/top/fv_maintext-all_sp.svg" media="(max-width: 750px)">
            <img src="<?php echo get_template_directory_uri(); ?>/images/top/fv_maintext-all.svg" alt="">
          </picture>
        </div>
        <div class="sub-copy">
          <img src="<?php echo get_template_directory_uri(); ?>/images/top/fv_subtext-all.svg" alt="">
        </div>
      </div>
      <div class="fv_topics">
        <div class="ttl">New Topics</div>
        <?php
        $args = array(
          'posts_per_page' => 1
        );
        $the_query = new WP_Query($args);
        if ($the_query->have_posts()) : while ($the_query->have_posts()) : $the_query->the_post();
        ?>
        <dl class="text-ell">
          <a href="<?php the_permalink(); ?>">
            <dt>
              <span class="time"><?php echo get_the_date('Y年n月j日'); ?></span>
              <span class="cate">
                <?php 
                  $categories = get_the_category();
                  if (!empty($categories)) {
                      echo esc_html($categories[0]->name);
                  }
                ?>
              </span>
            </dt>
            <dd><?php the_title(); ?></dd>
          </a>
        </dl>
        <?php endwhile;
            endif;
            wp_reset_postdata(); ?>
      </div>
    </div><!-- /.fv -->

    <section class="wrap_about bg-noise bg-line">
      <div class="inner">
        <div class="block fadeIn">
          <div class="left">
            <div class="ttl-wrap">
              <h2>About us</h2>
              <p class="sub-ttl">価値<span>を</span>つなぎ、新<span>たな</span>物語<span>を</span></p>
            </div>
            <p>
              1点モノの古着と、1人ひとりの個性。<br>
              その出会いがまた、<br class="u_sp">新しい物語とカルチャーを創造する。<br>
              そんな出会いとワクワクを、私たちは届けます。
            </p>
            <div class="btn-wrap">
              <a class="btn red" href="<?php echo home_url('/about'); ?>">View More</a>
            </div>
          </div>
          <div class="right img-wrap">
            <div class="img-box"><img src="<?php echo get_template_directory_uri(); ?>/images/top/top_about-img01.jpg" alt=""></div>
            <div class="img-box"><img src="<?php echo get_template_directory_uri(); ?>/images/top/top_about-img02.jpg" alt=""></div>
          </div>
        </div>
      </div>
      <div class="balloon img-box parallax"><img src="<?php echo get_template_directory_uri(); ?>/images/common/ashirai_balloon.png" alt=""></div>
      <div class="logomark img-box"><img src="<?php echo get_template_directory_uri(); ?>/images/common/ashirai_logo-mark.svg" alt=""></div>
    </section>

    <section class="wrap_ourbrand bg-noise">
      <div class="inner">
        <div class="ttl-wrap fadeIn">
          <h2>Our Brand</h2>
          <p class="sub-ttl">ブランド一覧</p>
        </div>
        <div class="block fadeIn">

          <div class="box pigsty u-pc">
            <a href="<?php echo home_url('/business#pigsty'); ?>">
              <div class="img-box"><img src="<?php echo get_template_directory_uri(); ?>/images/top/top_ourbrand-storeimg01.jpg" alt="pigsty"></div>
              <div class="logo"><img src="<?php echo get_template_directory_uri(); ?>/images/common/logo_pigsty.svg" alt=""></div>
            </a>
          </div>
          <div class="box pig-az u-pc">
            <a href="<?php echo home_url('/business#pig-az'); ?>">
              <div class="img-box"><img src="<?php echo get_template_directory_uri(); ?>/images/top/top_ourbrand-storeimg02.jpg" alt="pigsty a-z store"></div>
              <div class="logo"><img src="<?php echo get_template_directory_uri(); ?>/images/common/logo_pigsty-az.svg" alt=""></div>
            </a>
          </div>
          <div class="box vivie u-pc">
            <a href="<?php echo home_url('/business#vivie'); ?>">
              <div class="img-box"><img src="<?php echo get_template_directory_uri(); ?>/images/top/top_ourbrand-storeimg03.jpg" alt="vivie"></div>
              <div class="logo"><img src="<?php echo get_template_directory_uri(); ?>/images/common/logo_vivie.svg" alt=""></div>
            </a>
          </div>
          <div class="box changes u-pc">
            <a href="<?php echo home_url('/business#changes'); ?>">
              <div class="img-box"><img src="<?php echo get_template_directory_uri(); ?>/images/top/top_ourbrand-storeimg04.jpg" alt=""></div>
              <div class="logo"><img src="<?php echo get_template_directory_uri(); ?>/images/common/logo_nerver-chamges.svg"
                  alt="change forward some things will never changes"></div>
            </a>
          </div>


          <div class="swiper ourbrand-swiper common-swip u-sp">
            <div class="swiper-wrapper">
              <div class="box swiper-slide">
                <a href="<?php echo home_url('/business#pigsty'); ?>">
                  <div class="img-box obj-fit"><img src="<?php echo get_template_directory_uri(); ?>/images/top/top_ourbrand-storeimg01.jpg" alt="pigsty"></div>
                  <div class="logo"><img src="<?php echo get_template_directory_uri(); ?>/images/common/logo_pigsty.svg" alt=""></div>
                </a>
              </div>
              <div class="box swiper-slide">
                <a href="<?php echo home_url('/business#pig-az'); ?>">
                  <div class="img-box obj-fit"><img src="<?php echo get_template_directory_uri(); ?>/images/top/top_ourbrand-storeimg02.jpg" alt="pigsty a-z store">
                  </div>
                  <div class="logo"><img src="<?php echo get_template_directory_uri(); ?>/images/common/logo_pigsty-az.svg" alt=""></div>
                </a>
              </div>
              <div class="box swiper-slide">
                <a href="<?php echo home_url('/business#vivie'); ?>">
                  <div class="img-box obj-fit"><img src="<?php echo get_template_directory_uri(); ?>/images/top/top_ourbrand-storeimg03.jpg" alt="vivie"></div>
                  <div class="logo"><img src="<?php echo get_template_directory_uri(); ?>/images/common/logo_vivie.svg" alt=""></div>
                </a>
              </div>
              <div class="box swiper-slide">
                <a href="<?php echo home_url('/business#changes'); ?>">
                  <div class="img-box obj-fit"><img src="<?php echo get_template_directory_uri(); ?>/images/top/top_ourbrand-storeimg04.jpg" alt=""></div>
                  <div class="logo"><img src="<?php echo get_template_directory_uri(); ?>/images/common/logo_nerver-chamges.svg"
                      alt="change forward some things will never changes"></div>
                </a>
              </div>
            </div>
          </div>
          <div class="swiper-pagination-container top-swiper_pagenation">
            <div class="swiper-button-prev font-unb">PREV</div>
            <div class="swiper-pagination-custom">
              <span class="current-slide font-unb">01</span><span class="line"></span><span
                class="total-slides font-unb">04</span>
            </div>
            <div class="swiper-button-next font-unb">NEXT</div>
          </div>
        </div>

        <div class="btn-wrap"><a class="btn red" href="<?php echo home_url('/business#business_brand'); ?>">View More</a></div>
      </div>
      <div class="builds_01 img-box"><img src="<?php echo get_template_directory_uri(); ?>/images/top/top_ourbrand-img01.png" alt=""></div>
      <div class="builds_02 img-box"><img src="<?php echo get_template_directory_uri(); ?>/images/top/top_ourbrand-img02.png" alt=""></div>
    </section>

    <div class="wrap_cta wholesale parallax-bg y100">
      <div class="cta-inner fadeIn">
        <div class="ttl-wrap">
          <h2>Wholesale</h2>
          <p class="sub-ttl">古着卸売事業</p>
        </div>
        <p>
          アメリカのラグハウスより<br class="u-sp">毎日バイヤーが古着の仕入れを行っています。<br>
          現地で一点一点状態やサイズ等チェックをし、<br class="u-sp">厳選した商品を多数取り揃えております。
        </p>
        <div class="btn-wrap"><a class="btn red" href="<?php echo home_url('/wholesale'); ?>">View More</a></div>
      </div>
    </div>

    <section class="wrap_news bg-noise">
      <div class="inner">
        <div class="block fadeIn">
          <div class="left">
            <div>
              <div class="ttl-wrap">
                <h2>News</h2>
                <p class="sub-ttl">新着情報</p>
              </div>
              <div class="btn-wrap u-pc"><a class="btn red" href="<?php echo home_url('/news'); ?>">View More</a></div>
              <div class="pig img-box"><img src="<?php echo get_template_directory_uri(); ?>/images/top/top_news-img01.png" alt=""></div>
            </div>
          </div>
          <div class="right archive-list">
            <?php
            $args = array(
              'posts_per_page' => 3
            );
            $the_query = new WP_Query($args);
            if ($the_query->have_posts()) : while ($the_query->have_posts()) : $the_query->the_post();
            ?>
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
            <?php endwhile;
            endif;
            wp_reset_postdata(); ?>

            <div class="btn-wrap u-sp"><a class="btn red" href="<?php echo home_url('/news'); ?>">View More</a></div>
          </div>
        </div>
      </div>
    </section>

    <?php get_template_part('inc/cta-recruit'); ?>


  </main>

<?php get_footer(); ?>