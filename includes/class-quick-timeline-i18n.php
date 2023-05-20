<?php

/**
 * Define the internationalization functionality
 *
 * Loads and defines the internationalization files for this plugin
 * so that it is ready for translation.
 *
 * @link       https://vishalpadhariya.github.io/
 * @since      1.0.0
 *
 * @package    Quick_Timeline
 * @subpackage Quick_Timeline/includes
 */

/**
 * Define the internationalization functionality.
 *
 * Loads and defines the internationalization files for this plugin
 * so that it is ready for translation.
 *
 * @since      1.0.0
 * @package    Quick_Timeline
 * @subpackage Quick_Timeline/includes
 * @author     Vishal Padhariya <pbytes.hub@gmail.com>
 */
class Quick_Timeline_i18n {


	/**
	 * Load the plugin text domain for translation.
	 *
	 * @since    1.0.0
	 */
	public function load_plugin_textdomain() {

		load_plugin_textdomain(
			'quick-timeline',
			false,
			dirname( dirname( plugin_basename( __FILE__ ) ) ) . '/languages/'
		);

	}



}
