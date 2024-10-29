<?php

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Blocks Class
*/

final class MSTG_Blocks_Class {

	private function __construct(){
		$this->mstg_define_constants(); 
		add_action( 'init', [ $this, 'mstg_blocks_assets' ] );
		add_filter( 'block_categories', [ $this, 'mstg_custom_category' ] );
		add_action( 'enqueue_block_assets', [ $this, 'mstg_external_assets_load' ] );
	}

	/**
	 * Singleton Instanace 
	*/

	public static function mstg_init(){
		static $instance = false; 
		if( ! $instance ) {
			$instance = new self();
		}
		return $instance;
	}

	/**
	 * Constants Define 
	*/
	public function mstg_define_constants(){
		define( 'MSTG_FILE', __FILE__ );
		define( 'MSTG_BLOCK', plugins_url( '', dirname( MSTG_FILE ) ) );
		define( 'MSTG_BLOCK_ASSETS', MSTG_BLOCK . '/dist' );
		define( 'MSTG_EXTERNAL_ASSETS', MSTG_BLOCK . '/assets' );
	}

	/**
	 * Blocks Registration 
	*/
	private function mstg_single_block_register( $block, $options=array() ){
		return register_block_type(
			'mstg/'. $block, 
			array_merge(
				array(
					'editor_script' => 'mstg-editor-script',
					'editor_style'  => 'mstg-editor-style',
					'style'         => 'mstg-style',
				),
				$options
			)
		);
	}

	/**
	 * Blocks Assets + Registration 
	*/
	public function mstg_blocks_assets(){

		// Frontend + Backend Style 
		wp_register_style(
			'mstg-style',
			MSTG_BLOCK_ASSETS . '/blocks.style.build.css',
			is_admin() ? array( 'wp-editor' ) : null,
			null
		);

		// Backend Style 
		wp_register_style(
			'mstg-editor-style',
			MSTG_BLOCK_ASSETS . '/blocks.editor.build.css',
			array( 'wp-edit-blocks' ),
			null
		);

		// Editor Scripts
		wp_register_script(
			'mstg-editor-script',
			MSTG_BLOCK_ASSETS . '/blocks.build.js',
			array( 'wp-blocks', 'wp-i18n', 'wp-element', 'wp-editor' ),
			null,
			true
		);

		// Register Single Block 
		$this->mstg_single_block_register('product-item');
		$this->mstg_single_block_register('products-builder');
		$this->mstg_single_block_register('review-box');
		$this->mstg_single_block_register('full-product-review');
		$this->mstg_single_block_register('props-cons');
		$this->mstg_single_block_register('score-bar');
		$this->mstg_single_block_register('product-score');
		$this->mstg_single_block_register('product-reivew');
		$this->mstg_single_block_register('product-row');
		$this->mstg_single_block_register('comparison-table');
	
	}

	/**
	 * Block Custom Category 
	*/
	public function mstg_custom_category( $categories ){
		return array_merge(
			array(
				array(
					'title' => 'Mustenberg Blocks',
					'slug'  => 'mustenberg-blocks'
				)
			),
			$categories
		);
	}

	/**
	 * External Assets Enqueue 
	*/
	public function mstg_external_assets_load(){
		wp_enqueue_script( 'mstg-google-fonts', '//ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js', array(), '1.0.0', true );
		if( !is_admin() ){
			wp_enqueue_style( 'mstg-slick', MSTG_EXTERNAL_ASSETS . '/css/slick.css', array(), null, 'all' );
			wp_enqueue_style( 'mstg-slick-theme', MSTG_EXTERNAL_ASSETS . '/css/slick-theme.css', array(), null, 'all' );
			wp_enqueue_script( 'mstg-slick', MSTG_EXTERNAL_ASSETS . '/js/slick.min.js', array('jquery'), '1.0.0', true );
			wp_enqueue_script( 'mstg-plugin', MSTG_EXTERNAL_ASSETS . '/js/plugin.js', array('jquery'), '1.0.0', true );
		}
	}
	
}
/**
 * Initialization 
*/
function mstg_blocks(){
	return MSTG_Blocks_Class::mstg_init();
}

// kick-off the plugin 
mstg_blocks();