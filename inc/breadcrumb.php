<div class="breadcrumbs bg-noise bg-line">
  <div class="inner">
    <ul>
      <li><a href="<?php echo home_url('/'); ?>">トップ</a></li>
      <li>
        <?php 
          if (is_archive()) {
            echo 'お知らせ一覧';
          } else {
            the_title();
          }
        ?>
      </li>
    </ul>
  </div>
</div>