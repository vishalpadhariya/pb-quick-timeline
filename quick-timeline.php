<?php

/**
 * The plugin bootstrap file
 *
 * This file is read by WordPress to generate the plugin information in the plugin
 * admin area. This file also includes all of the dependencies used by the plugin,
 * registers the activation and deactivation functions, and defines a function
 * that starts the plugin.
 *
 * @link              https://vishalpadhariya.github.io/
 * @since             1.0.0
 * @package           Quick_Timeline
 *
 * @wordpress-plugin
 * Plugin Name:       PB Quick Timeline
 * Plugin URI:        https://github.com/vishalpadhariya/pb-quick-timeline
 * Description:       Create a timline using this plugin easily. You can create timeline with two different ways. (1) Using JSON file (2) Using AJAX
 * Version:           1.0.0
 * Author:            Vishal Padhariya
 * Author URI:        https://vishalpadhariya.github.io/
 * License:           GPL-2.0+
 * License URI:       http://www.gnu.org/licenses/gpl-2.0.txt
 * Text Domain:       quick-timeline
 * Domain Path:       /languages
 */

// If this file is called directly, abort.
if (!defined('WPINC')) {
	die;
}

/**
 * Currently plugin version.
 * Start at version 1.0.0 and use SemVer - https://semver.org
 * Rename this for your plugin and update it as you release new versions.
 */
define('QUICK_TIMELINE_VERSION', '1.0.0');

/**
 * The code that runs during plugin activation.
 * This action is documented in includes/class-quick-timeline-activator.php
 */
function activate_quick_timeline()
{
	require_once plugin_dir_path(__FILE__) . 'includes/class-quick-timeline-activator.php';
	Quick_Timeline_Activator::activate();
}

/**
 * The code that runs during plugin deactivation.
 * This action is documented in includes/class-quick-timeline-deactivator.php
 */
function deactivate_quick_timeline()
{
	require_once plugin_dir_path(__FILE__) . 'includes/class-quick-timeline-deactivator.php';
	Quick_Timeline_Deactivator::deactivate();
}

register_activation_hook(__FILE__, 'activate_quick_timeline');
register_deactivation_hook(__FILE__, 'deactivate_quick_timeline');

/**
 * The core plugin class that is used to define internationalization,
 * admin-specific hooks, and public-facing site hooks.
 */
require plugin_dir_path(__FILE__) . 'includes/class-quick-timeline.php';

/**
 * Begins execution of the plugin.
 *
 * Since everything within the plugin is registered via hooks,
 * then kicking off the plugin from this point in the file does
 * not affect the page life cycle.
 *
 * @since    1.0.0
 */
function run_quick_timeline()
{

	$plugin = new Quick_Timeline();
	$plugin->run();
}
run_quick_timeline();


add_action('wp_enqueue_scripts', 'callback_for_setting_up_scripts');
function callback_for_setting_up_scripts()
{
	wp_enqueue_style('owl-slider-style', plugin_dir_url(__FILE__) . 'assets/css/owl.carousel.min.css');
	wp_enqueue_style('bs-style', plugin_dir_url(__FILE__) . 'assets/css/bootstrap.min.css');
	wp_enqueue_style('timeline-style', plugin_dir_url(__FILE__) . 'assets/css/timeline.css');
	wp_enqueue_script('owl-slider-js', plugin_dir_url(__FILE__) . 'assets/js/owl.carousel.min.js', array('jquery'), QUICK_TIMELINE_VERSION, true);
	wp_enqueue_script('bs-js', plugin_dir_url(__FILE__) . 'assets/js/bootstrap.min.js', array('jquery'), QUICK_TIMELINE_VERSION, true);
	wp_enqueue_script('timeline-js', plugin_dir_url(__FILE__) . 'assets/js/timeline.js', array('jquery'), QUICK_TIMELINE_VERSION, true);
	wp_localize_script(
		'timeline-js',
		'wp_pbyteshub_localize',
		array(
			'ajaxurl' => admin_url('admin-ajax.php'),
		)
	);
}

add_filter( 'plugin_row_meta', 'plugin_row_meta', 10, 2 );

function plugin_row_meta( $links, $file ) {    
    if ( plugin_basename( __FILE__ ) == $file ) {
        $row_meta = array(
          'docs'    => '<a href="' . esc_url( plugin_dir_url(__FILE__).'README.md' ) . '" target="_blank" aria-label="' . esc_attr__( 'Plugin Additional Links', 'quick-timline' ) . '" style="color:green;">' . esc_html__( 'View Documentation', 'quick-timline' ) . '</a>'
        );

        return array_merge( $links, $row_meta );
    }
    return (array) $links;
}