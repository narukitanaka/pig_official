<aside>
  <div class="side-warp">
    <div class="ttl-wrap">
      <h2>Category</h2>
      <p class="sub-ttl">カテゴリー</p>
    </div>
    <div class="cate-list">
      <ul>
        <li><a class="<?php echo !is_category() && is_archive() ? 'active' : ''; ?>" href="<?php echo home_url('/news'); ?>"><span></span>All</a></li>
        <?php
        $categories = get_categories();
        $current_category = get_queried_object();
        foreach ($categories as $category) :
          $is_active = (is_category() && $current_category->term_id == $category->term_id) ? 'active' : '';
        ?>
        <li><a class="<?php echo $is_active; ?>" href="<?php echo get_category_link($category->term_id); ?>"><span></span><?php echo $category->name; ?></a></li>
        <?php endforeach; ?>
      </ul>
    </div>
    <div class="img-box"><img src="<?php echo get_template_directory_uri(); ?>/images/common/ashirai_real-pig.png" alt=""></div>
  </div>
</aside>