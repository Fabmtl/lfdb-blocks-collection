<?php
/**
 * Plugin Name:       Lfdb Blocks Collection
 * Description:       Example static block scaffolded with Create Block tool.
 * Requires at least: 5.9
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       lfdb-blocks-collection
 *
 * @package           create-block
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function create_block_lfdb_blocks_collection_block_init() {
	register_block_type( __DIR__ . '/build/hamburger' );
	// register_block_type( __DIR__ . '/build/outermost-mega-menu' );
	register_block_type( __DIR__ . '/build/lfdb-section-mega-menu' );
	register_block_type( __DIR__ . '/build/lfdb-menu-mobile' );
	register_block_type( __DIR__ . '/build/lfdb-search' );
	register_block_type( __DIR__ . '/build/lfdb-mega-menu' );
	// register_block_type( __DIR__ . '/build/slider-swiper' );
	// register_block_type( __DIR__ . '/build/slide' );
}
add_action( 'init', 'create_block_lfdb_blocks_collection_block_init' );

add_action( "wp_enqueue_scripts", "lfdb_blocks_collections_swiper");
add_action( 'enqueue_block_editor_assets', 'lfdb_blocks_collections_swiper' );
function lfdb_blocks_collections_swiper() 
{
	wp_enqueue_style("swiper-blocks-stylesheet","https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css");
	wp_enqueue_script("swiper-blocks-scripts","https://cdn.jsdelivr.net/npm/swiper@11/swiper-element-bundle.min.js", array(), null, true);
	
}

add_filter( 'block_categories_all' , function( $categories ) {

    // Adding a new category.
	$lfdb_block_category = array(
		'slug'  => 'lfdb-blocks',
		'title' => 'La Fabrique de blogs'
	);
	array_unshift($categories,$lfdb_block_category);

	return $categories;
} );

/**
 * Adds a custom template part area for mega menus to the list of template part areas.
 *
 * @param array $areas Existing array of template part areas.
 * @return array Modified array of template part areas including the new "Menu" area.
 */
function outermost_mega_menu_template_part_areas( array $areas ) {
	$areas[] = array(
		'area'        => 'menu',
		'area_tag'    => 'div',
		'description' => __( 'Menu templates are used to create sections of a mega menu.', 'lfdb' ),
		'icon'        => '',
		'label'       => __( 'Menu', 'lfdb' ),
	);

	return $areas;
}
add_filter( 'default_wp_template_part_areas', 'outermost_mega_menu_template_part_areas' );