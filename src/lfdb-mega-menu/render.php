<?php
/**
 * PHP file to use when rendering the block type on the server to show on the front end.
 *
 * The following variables are exposed to the file:
 *     $attributes (array): The block attributes.
 *     $content (string): The block default content.
 *     $block (WP_Block): The block instance.
 *
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 */

// $disable_when_collapsed = $attributes['disableWhenCollapsed'] ?? false;
$label                  = esc_html( $attributes['label'] ?? '' );
$menu_slug              = esc_attr( $attributes['menuSlug'] ?? '');
$parentPageId           = esc_attr( $attributes['pageParentId'] ?? '0');
$currentPageID          = get_queried_object_id();
$currentPageParentID    = wp_get_post_parent_id( $currentPageID );
// $collapsed_url       = esc_url( $attributes['collapsedUrl'] ?? '');

// var_dump($parentPageId );
// var_dump($currentPageID );
// var_dump($currentPageParentID );
// Don't display the mega menu link if there is no label or no menu slug.
if ( ! $label || ! $menu_slug ) {
	return null;	
}

$classes  = '';
$classes  .= ($parentPageId == $currentPageParentID) ? ' current-menu-ancestor' : '';
$classes  .= ($parentPageId == $currentPageID) ? ' current-menu-item' : '';

// $classes  = $disable_when_collapsed ? 'disable-menu-when-collapsed ' : '';
// $classes .= $collapsed_url ? 'has-collapsed-link ' : '';

$wrapper_attributes = get_block_wrapper_attributes(
	array( 'class' => $classes )
);

// $menu_classes  = 'wp-block-lfdb-mega-menu__menu-container';
// $menu_classes .= ' menu-width-' . $menu_width;
// $menu_classes .= $justify_menu ? ' menu-justified-' . $justify_menu : '';

// Icons.
$close_icon  = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" focusable="false"><path d="M13 11.8l6.1-6.3-1-1-6.1 6.2-6.1-6.2-1 1 6.1 6.3-6.5 6.7 1 1 6.5-6.6 6.5 6.6 1-1z"></path></svg>';
$toggle_icon = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12" width="12" height="12" aria-hidden="true" focusable="false" fill="none"><path d="M1.50002 4L6.00002 8L10.5 4" stroke-width="1.5"></path></svg>';


// var_dump(get_queried_object());
?>

<li <?php echo $wrapper_attributes; ?>>
	<button
		class="wp-block-lfdb-mega-menu__toggle"
		data-lfdb-section-menu-target= <?php echo $menu_slug; ?> 
		data-parent-page-id= <?php echo $parentPageId; ?>
	>
		<?php echo $label; ?><span class="wp-block-lfdb-mega-menu__toggle-icon"><?php echo $toggle_icon; ?></span>
	</button>
</li>
