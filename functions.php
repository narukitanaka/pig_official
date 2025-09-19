<?php
/////////////////////////////////////////
//アイキャッチ画像を有効化
/////////////////////////////////////////
add_theme_support('post-thumbnails');

/////////////////////////////////////////
//お知らせ
/////////////////////////////////////////
function post_has_archive( $args, $post_type ) {
  if ( 'post' == $post_type ) {
    $args['rewrite'] = true;
    $args['has_archive'] = 'news';
  }
  return $args;
}
add_filter( 'register_post_type_args', 'post_has_archive', 10, 2 );

/////////////////////////////////////////
//謎のpタグbrタグを消す
/////////////////////////////////////////
// 投稿の自動整形を無効化
remove_filter('the_content', 'wpautop');
// 抜粋の自動整形を無効化
remove_filter('the_excerpt', 'wpautop');
// Contact Form 7の自動整形を無効化
add_filter('wpcf7_autop_or_not', '__return_false');
