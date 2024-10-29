<?php
/**
 * Plugin Name: Mustenberg
 * Description: <strong>Mustenberg</strong> is a collection of custom <strong>Gutenberg Blocks</strong> that are built with <strong>Gutenberg Native Components</strong> to showcase products in different styles. 
 * Author: Avi Aminov
 * Author URI: https://minotheme.com/
 * Version: 1.0.1
 * License: GPL2+
 * License URI: https://www.gnu.org/licenses/gpl-2.0.txt
 *
 * @package Mustenberg
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Block Initializer.
 */
require_once plugin_dir_path( __FILE__ ) . 'src/init.php';