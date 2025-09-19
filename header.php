<!DOCTYPE html>
<html lang="ja">

<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
  <!-- favicon -->
  <link rel="icon" type="image/png" href="images/fav.png" />
  <!-- <meta name="robots" content="index, follow"> -->
  <meta name="format-detection" content="telephone=no">
  <!-- css -->
  <link rel="stylesheet" type="text/css" href="<?php echo get_template_directory_uri(); ?>/css/reset.css">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/yakuhanjp@4.0.1/dist/css/yakuhanjp.css">
  <link rel="stylesheet" type="text/css" href="<?php echo get_template_directory_uri(); ?>/scss/style.css">

  <!-- AdobeFonts -->
  <link rel="stylesheet" href="https://use.typekit.net/aig2oxm.css">
  <!-- GoogleFonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link
    href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100..900&family=Unbounded:wght@200..900&display=swap"
    rel="stylesheet">

  <title>PIG Inc.</title>
  <meta name="description" content="" />
  <meta name="keywords" content="" />

  <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js"></script>
</head>
<?php wp_head(); ?>

<body>
<?php wp_body_open(); ?>

  <header>
    <div class="header-inner">
      <div class="logo img-box">
        <a href="<?php echo home_url('/'); ?>">
          <img class="is_top" src="<?php echo get_template_directory_uri(); ?>/images/common/logo_pig.svg" alt="">
        </a>
      </div>

      <div class="navigation">
        <nav>
          <ul>
            <li><a href="<?php echo home_url(''); ?>">Top</a></li>
            <li><a href="<?php echo home_url('/about'); ?>">About us</a></li>
            <li><a href="<?php echo home_url('/business'); ?>">Business</a></li>
            <li><a href="<?php echo home_url('/company'); ?>">Company</a></li>
            <li><a href="<?php echo home_url('/wholesale'); ?>">Wholesale</a></li>
            <li><a href="<?php echo home_url('/news'); ?>">News</a></li>
            <li><a href="<?php echo home_url('/contact'); ?>">Contact</a></li>
          </ul>
        </nav>

        <div class="btn-area">
          <button class="btn red btn-insta">
            Instagram
            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="9" viewBox="0 0 10 9">
              <path id="iocn-arrow01" d="M5,0l5,9H0Z" transform="translate(10 9) rotate(180)" fill="#fff" />
            </svg>
          </button>
          <a class="btn yellow" href="#" target="_blank">Recruit</a>
        </div>
      </div>

      <div class="insta-wrap">
        <div class="insta_accounts">
          <div class="stores pigsty">
            <p><img src="<?php echo get_template_directory_uri(); ?>/images/common/icon-insta.svg" alt="">Pigsty</p>
            <div class="links">
              <a target="_blank" href="https://www.instagram.com/pigsty_amemura/?hl=ja">大阪 / アメ村店</a>
              <a target="_blank" href="https://www.instagram.com/pigsty_umeda/">大阪 / 梅田店</a>
              <a target="_blank" href="https://www.instagram.com/pigsty_harajyuku/">東京 / 原宿店</a>
            </div>
          </div>
          <div class="stores pig_az">
            <p><img src="<?php echo get_template_directory_uri(); ?>/images/common/icon-insta.svg" alt="">Pigsty a⇌z STORE</p>
            <div class="links">
              <a target="_blank" href="https://www.instagram.com/pigsty.a_z.amemura/">大阪 / アメ村店</a>
              <a target="_blank" href="https://www.instagram.com/pigsty.a_z.store/?hl=ja">大阪 / 中崎町店</a>
              <a target="_blank" href="https://www.instagram.com/pigsty.a_z.shibuya/">東京 / 渋谷店</a>
              <a target="_blank" href="https://www.instagram.com/pigsty.a_z.shimokita/">東京 / 下北沢店</a>
            </div>
          </div>
          <div class="stores vivie">
            <p><img src="<?php echo get_template_directory_uri(); ?>/images/common/icon-insta.svg" alt="">vivie</p>
            <div class="links"><a target="_blank" href="https://www.instagram.com/vivie_nakazaki/">大阪 / 中崎町店</a></div>
          </div>
          <div class="stores changes">
            <p><img src="<?php echo get_template_directory_uri(); ?>/images/common/icon-insta.svg" alt="">CHANGES</p>
            <div class="links"><a target="_blank" href="https://www.instagram.com/changes__official/?hl=ja">公式アカウント</a>
            </div>
          </div>
          <div class="stores whole">
            <p><img src="<?php echo get_template_directory_uri(); ?>/images/common/icon-insta.svg" alt="">WHOLESALE</p>
            <div class="links">
              <a target="_blank" href="https://www.instagram.com/pigsty_wholesale/">大阪 / 卸売事業アカウント</a>
              <a target="_blank" href="https://www.instagram.com/pigsty_wholesale_tokyo/">東京 / 卸売事業アカウント</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>

  <div class="hamberger-wrap">
    <div class="ham-inner">
      <p>Menu</p>
      <div class="hambager-content">
        <button type="button" class="hambager">
          <span class="c-line"></span>
          <span class="c-line"></span>
          <span class="c-line"></span>
        </button>
      </div><!-- /.hambager-content -->
    </div>
  </div><!-- hamberger-wrap -->

  <div class="drawer-menu">
    <div class="drawer-menu_inner">
      <div class="links">

        <button class="btn gray insta_accordion-trigger" href="" target="_blank">
          Instagram
          <!-- <img src="<?php echo get_template_directory_uri(); ?>/images/common/icon-arrow03_r-down.svg" alt=""> -->
          <div class="bg-arow"></div>
        </button>
        <div class="accordion-content">
          <div class="instagram-accounts">
            <div class="stores pigsty">
              <p><img src="<?php echo get_template_directory_uri(); ?>/images/common/icon-insta_red.svg" alt="">Pigsty</p>
              <div class="links">
                <a target="_blank" href="https://www.instagram.com/pigsty_amemura/?hl=ja">大阪 / アメ村店</a>
                <a target="_blank" href="https://www.instagram.com/pigsty_umeda/">大阪 / 梅田店</a>
                <a target="_blank" href="https://www.instagram.com/pigsty_harajyuku/">東京 / 原宿店</a>
              </div>
            </div>
            <div class="stores pig_az">
              <p><img src="<?php echo get_template_directory_uri(); ?>/images/common/icon-insta_red.svg" alt="">Pigsty a⇌z STORE</p>
              <div class="links">
                <a target="_blank" href="https://www.instagram.com/pigsty.a_z.amemura/">大阪 / アメ村店</a>
                <a target="_blank" href="https://www.instagram.com/pigsty.a_z.store/?hl=ja">大阪 / 中崎町店</a>
                <a target="_blank" href="https://www.instagram.com/pigsty.a_z.shibuya/">東京 / 渋谷店</a>
                <a target="_blank" href="https://www.instagram.com/pigsty.a_z.shimokita/">東京 / 下北沢店</a>
              </div>
            </div>
            <div class="stores vivie">
              <p><img src="<?php echo get_template_directory_uri(); ?>/images/common/icon-insta_red.svg" alt="">vivie</p>
              <div class="links"><a target="_blank" href="https://www.instagram.com/vivie_nakazaki/">大阪 / 中崎町店</a></div>
            </div>
            <div class="stores changes">
              <p><img src="<?php echo get_template_directory_uri(); ?>/images/common/icon-insta_red.svg" alt="">CHANGES</p>
              <div class="links"><a target="_blank"
                  href="https://www.instagram.com/changes__official/?hl=ja">公式アカウント</a></div>
            </div>
            <div class="stores whole">
              <p><img src="<?php echo get_template_directory_uri(); ?>/images/common/icon-insta_red.svg" alt="">WHOLESALE</p>
              <div class="links">
                <a target="_blank" href="https://www.instagram.com/pigsty_wholesale/">大阪 / 卸売事業アカウント</a>
                <a target="_blank" href="https://www.instagram.com/pigsty_wholesale_tokyo/">東京 / 卸売事業アカウント</a>
              </div>
            </div>
          </div>
        </div>

        <a class="btn yellow" href="#" target="_blank">
          Recruit
          <img src="<?php echo get_template_directory_uri(); ?>/images/common/icon-arrow03.svg" alt="">
        </a>
      </div>
      <div class="nav-wrap">
        <nav>
          <ul>
            <li>
              <a href="<?php echo home_url('/about'); ?>">
                About Us<span>私たちについて</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="19.202" height="29.99" viewBox="0 0 19.202 29.99">
                  <g id="icon-arrow03" transform="translate(111.286 29.99) rotate(180)">
                    <path id="パス_10719" data-name="パス 10719"
                      d="M111.286,4.207,107.079,0,92.084,15,107.079,29.99l4.207-4.207L100.5,15Z" fill="#fff" />
                  </g>
                </svg>
              </a>
            </li>
            <li>
              <a href="<?php echo home_url('/business'); ?>">
                Business<span>事業内容</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="19.202" height="29.99" viewBox="0 0 19.202 29.99">
                  <g id="icon-arrow03" transform="translate(111.286 29.99) rotate(180)">
                    <path id="パス_10719" data-name="パス 10719"
                      d="M111.286,4.207,107.079,0,92.084,15,107.079,29.99l4.207-4.207L100.5,15Z" fill="#fff" />
                  </g>
                </svg>
              </a>
            </li>
            <li>
              <a href="<?php echo home_url('/wholesale'); ?>">
                Wholesale<span>卸売事業</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="19.202" height="29.99" viewBox="0 0 19.202 29.99">
                  <g id="icon-arrow03" transform="translate(111.286 29.99) rotate(180)">
                    <path id="パス_10719" data-name="パス 10719"
                      d="M111.286,4.207,107.079,0,92.084,15,107.079,29.99l4.207-4.207L100.5,15Z" fill="#fff" />
                  </g>
                </svg>
              </a>
            </li>
            <li>
              <a href="<?php echo home_url('/company'); ?>">
                Company<span>会社概要</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="19.202" height="29.99" viewBox="0 0 19.202 29.99">
                  <g id="icon-arrow03" transform="translate(111.286 29.99) rotate(180)">
                    <path id="パス_10719" data-name="パス 10719"
                      d="M111.286,4.207,107.079,0,92.084,15,107.079,29.99l4.207-4.207L100.5,15Z" fill="#fff" />
                  </g>
                </svg>
              </a>
            </li>
            <li>
              <a href="<?php echo home_url('/news'); ?>">
                News<span>お知らせ一覧</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="19.202" height="29.99" viewBox="0 0 19.202 29.99">
                  <g id="icon-arrow03" transform="translate(111.286 29.99) rotate(180)">
                    <path id="パス_10719" data-name="パス 10719"
                      d="M111.286,4.207,107.079,0,92.084,15,107.079,29.99l4.207-4.207L100.5,15Z" fill="#fff" />
                  </g>
                </svg>
              </a>
            </li>
          </ul>
        </nav>
      </div><!-- /.nav-wrap -->

      <div class="contact">
        <a href="<?php echo home_url('/contact'); ?>">
          Contact
          <p>
            卸販売・採用等 各種<br>
            お問い合わせこちら
          </p>
          <svg xmlns="http://www.w3.org/2000/svg" width="19.202" height="29.99" viewBox="0 0 19.202 29.99">
            <g id="icon-arrow03" transform="translate(111.286 29.99) rotate(180)">
              <path id="パス_10719" data-name="パス 10719"
                d="M111.286,4.207,107.079,0,92.084,15,107.079,29.99l4.207-4.207L100.5,15Z" fill="#fff" />
            </g>
          </svg>
        </a>
      </div>

      <div class="info">
        <p>有限会社ピーアイジー　（PIG Inc.）</p>
        <p>
          〒542-0086<br>
          大阪市中央区西心斎橋1-7-14 大阪屋心斎橋西ビル3F
        </p>
        <div class="tel-fax">
          <a href="tel:0662510289">TEL： 06-6251-0289</a>
          <p>FAX：06-6245-3619</p>
        </div>
      </div>

    </div><!-- /.drawer-menu_inner -->
    <div class="logomark img-box"><img src="<?php echo get_template_directory_uri(); ?>/images/common/ashirai_logo-mark.svg" alt=""></div>
  </div><!-- /.drawer-menu -->