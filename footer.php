  <footer>
    <div class="inner">
      <div class="back-top"><a href="#">BACK TO TOP</a></div>
      <div class="footer-columns">
        <div class="col01">
          <div class="logo img-box"><a href="<?php echo home_url('/'); ?>"><img src="<?php echo get_template_directory_uri(); ?>/images/common/logo_pig.svg" alt="pig co.,ltd"></a></div>
          <div>
            <p>
              〒541-0058<br>
              大阪市中央区南久宝寺町3-4-9 大磯本社ビル2F
            </p>
            <p>
              TEL : 06-6251-0289<br>
              FAX : 06-6245-3619
            </p>
          </div>
        </div>
        <div class="col02">
          <nav>
            <ul>
              <li><a href="<?php echo home_url('/about'); ?>">私たちについて</a></li>
              <li><a href="<?php echo home_url('/business'); ?>">事業紹介</a></li>
              <li><a href="<?php echo home_url('/wholesale'); ?>">卸売事業</a></li>
              <li><a href="<?php echo home_url('/company'); ?>">会社概要</a></li>
              <li><a href="<?php echo home_url('/news'); ?>">新着情報</a></li>
              <li><a href="#">採用情報</a></li>
              <li><a href="<?php echo home_url('/contact'); ?>">お問い合わせ</a></li>
              <li><a href="<?php echo home_url('/policy'); ?>">プライバシーポリシー</a></li>  
            </ul>
          </nav>
        </div>
      </div>
      <div class="big-pig">PIG</div>
    </div>
    <div class="copy"><small>© 2025 PIG Co.,Ltd.</small></div>
  </footer>

  <!-- js -->
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
  <script src="<?php echo get_template_directory_uri(); ?>/js/swiper-bundle.min.js"></script>
  <script type="text/javascript" src="<?php echo get_template_directory_uri(); ?>/js/main.js"></script>
  <?php if (is_page('contact')): ?>
  <script type="text/javascript" src="<?php echo get_template_directory_uri(); ?>/js/contact-confirm.js"></script>
  <?php endif; ?>
  <?php if (is_page('wholesale')): ?>
  <script type="text/javascript" src="<?php echo get_template_directory_uri(); ?>/js/wholesale-confirm.js"></script>
  <?php endif; ?>
<?php wp_footer(); ?>
</body>

</html>
