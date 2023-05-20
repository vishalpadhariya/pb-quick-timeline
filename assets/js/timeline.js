(function () {
    'use strict';

	var timelines = [];

	// Sort timelines by time
	function sortByTimeAsc(a,b) {
		var a_time = parseInt(a.year + a.month + a.day);
		var b_time = parseInt(b.year + b.month + b.day);
		if (a_time < b_time) {
			return -1;
		} else if (a_time > b_time) {
			return 1;
		} else {
			return 0;
		}
	}
	function sortByTimeDesc(a,b) {
		var a_time = parseInt(a.year + a.month + a.day);
		var b_time = parseInt(b.year + b.month + b.day);
		if (a_time > b_time) {
			return -1;
		} else if (a_time < b_time) {
			return 1;
		} else {
			return 0;
		}
	}

	// Create timelines slider
	function createTimelines(el) {
		var style 		= (typeof el.attr('data-style') != "undefined") ? el.attr('data-style') : '1';
		var position 	= (typeof el.attr('data-position') != "undefined") ? el.attr('data-position') : 'right';
		var icon 		= (typeof el.attr('data-icon') != "undefined") ? el.attr('data-icon') : 'true';
		var items 		= (typeof el.attr('data-items') != "undefined") ? parseInt(el.attr('data-items')) : 5;

		// Responsive
		if ((screen.width <= 767) && (position == 'both')) {
			position = 'right';
		}
		
		if (style == 1) {
			el.html('<div class="timeline-slider style-1"><div class="slider-history owl-carousel"></div></div>');
			for (var i = 0; i < timelines.length; i++) {
				el.find('.slider-history').append(	'<div class="history-chart-content text-center">'
														+ '<div class="chart-dots">'
                            								+ '<span class="chart-year">' + timelines[i].year + '</span>'
                            								+ '<span class="chart-circle"></span>'
                        								+ '</div>'
							                            + '<div class="chart-caption">'
							                                + '<div class="caption">' + timelines[i].content + '</div>'
							                            + '</div>'
							                     	+ '</div>');
																
			}
		} else if (style == 2) {
			el.html('<div class="timeline-slider style-2"><div class="slider-history owl-carousel"></div></div>');
			for (var i = 0; i < timelines.length; i++) {
				var timeline_icon = (timelines[i].icon && (icon == 'true')) ? '<div class="icon"><i class="' + timelines[i].icon + '"></i></div>' : '<div class="no-icon"><span class="round"></span></div>';
				el.find('.slider-history').append(	'<div class="timeline-item text-center">'
                        								+ '<div class="timeline-time">' + timelines[i].time + '</div>'
                        								+ timeline_icon
                        								+ '<div class="timeline-content">'
	                        								+ '<h3 class="title">' + timelines[i].title + '</h3>'
								                            + '<div class="content">' + timelines[i].content + '</div>'
								                    	+ '</div>'
							                     	+ '</div>');
																
			}
		} else if (style == 3) {
			el.html('<div class="timeline-slider style-3"><div class="slider-history owl-carousel"></div></div>');
			console.log(timelines);
			for (var i = 0; i < timelines.length; i++) {
				var timeline_icon 	= (timelines[i].icon && (icon == 'true')) ? '<div class="icon"><i class="' + timelines[i].icon + '"></i></div>' : '<div class="no-icon"><span class="round"></span></div>';
				var timeline_image 	= timelines[i].image ? '<div class="image"><img src="' + timelines[i].image + '" /></div>' : '';
				el.find('.slider-history').append(	'<div class="timeline-item text-center">'
                        								+ '<span class="timeline-time">' + timelines[i].time + '</span>'
                        								+ timeline_icon
                        								+ '<div class="timeline-content">'
                        									+ '<div class="timeline-wrap">'
	                        									+ timeline_image
	                        									+ '<div class="timeline-title">'
			                        								+ '<h3 class="title">' + timelines[i].title + '</h3>'
										                            + '<div class="content">' + timelines[i].content + '</div>'
										                    	+ '</div>'
										                    + '</div>'
								                    	+ '</div>'
							                     	+ '</div>');
																
			}
		} else if (style == 4) {
			el.html('<div class="timelines style-4 position-' + position + '"><span class="timeline-spine"></span><div class="timeline-items"></div></div>');
			timelines = timelines.slice(0, items);
			for (var i = 0; i < timelines.length; i++) {
				var timeline_icon = (timelines[i].icon && (icon == 'true')) ? '<div class="icon"><i class="' + timelines[i].icon + '"></i></div>' : '<div class="no-icon"><span class="round"></span></div>';
				el.find('.timeline-items').append(	'<div class="timeline-item">'
														+ '<div class="content">'
															+ '<span class="time">' + timelines[i].time + '</span>'
															+ '<h3 class="title">' + timelines[i].title + '</h3>'
															+ '<p>' + timelines[i].content + '</p>'
														+ '</div>'
														+ timeline_icon
													+ '</div>');
			}
		} else if (style == 5) {
			el.html('<div class="timelines style-5 position-' + position + '"><span class="timeline-spine"></span><div class="timeline-items"></div></div>');
			timelines = timelines.slice(0, items);
			for (var i = 0; i < timelines.length; i++) {
				var timeline_icon 	= (timelines[i].icon && (icon == 'true')) ? '<div class="icon"><i class="' + timelines[i].icon + '"></i></div>' : '<div class="no-icon"><span class="round"></span></div>';
				var timeline_image 	= timelines[i].image ? '<div class="image"><img src="' + timelines[i].image + '" /></div>' : '';
				var has_image 		= timeline_image ? 'has-image' : 'no-image';
				el.find('.timeline-items').append(	'<div class="timeline-item">'
                        								+ '<div class="timeline-content ' + has_image + '">'
                        									+ '<div class="timeline-wrap">'
                        										+ '<span class="timeline-time">' + timelines[i].time + '</span>'
	                        									+ timeline_image
	                        									+ '<div class="timeline-title">'
			                        								+ '<h3 class="title">' + timelines[i].title + '</h3>'
										                            + '<div class="content">' + timelines[i].content + '</div>'
										                    	+ '</div>'
										                    + '</div>'
								                    	+ '</div>'
								                    	+ timeline_icon
							                     	+ '</div>');
			}
		}

		// Carousel
		if (el.find('.slider-history').length) {
			var autoplay 	= (typeof el.attr('data-autoplay') != "undefined") ? ((el.attr('data-autoplay') === 'false') ? false : true) : true;
			var loop 		= (typeof el.attr('data-loop') != "undefined") ? ((el.attr('data-loop') === 'false') ? false : true) : true;
			var center 		= (style == 2) ? false : true;

			var $owl = el.find('.slider-history');

			$owl.children().each( function( index ) {
	  			jQuery(this).attr('data-position', index );
			});
				
			$owl.owlCarousel({
	            margin: 0,
	            autoplay: autoplay,
	            center: center,
	            loop: loop,
	            nav: true,
	            navText: ["<span class='left'></span>", "<span class='right'></span>"],
	            stopOnHover: false,
	            pagination: false,
	            paginationNumbers: false,
	            responsiveClass: true,
	            responsive: {
	                0: {
	                    items: 1
	                },
	                768: {
	                    items: items
	                }
	            }
	        });

			if (center) {
				el.find('.owl-item > div').on('click', function (e) {
	           		var $speed = 300;  // in ms
					$owl.trigger('to.owl.carousel', [jQuery(this).data('position'), $speed]);
		        });
			}
		}
		
	}

	jQuery(document).ready(function(){
		jQuery('.quick-timeline').each(function(index) {
			// Set id for timeline
			jQuery(this).attr('id', 'timeline-' + (index + 1));

			// Get variables
			var type 	= (typeof jQuery(this).attr('data-type') != 'undefined') ? jQuery(this).attr('data-type') : 'json'; // json / php
			var source = (typeof jQuery(this).attr('data-source') != 'undefined') ? jQuery(this).attr('data-source') : ''; // json file path ( If type json ) else ajax action name ( If type php )
			var time 	= (typeof jQuery(this).attr('data-time') != "undefined") ? jQuery(this).attr('data-time') : 'asc'; // asc / desc
			var wpnonce  = (typeof jQuery(this).attr('data-nonce') != "undefined") ? jQuery(this).attr('data-nonce') : ''; // wp_nonce
			var timeline_contain = jQuery(this);

			if (type == 'json' && source != '') { // Get timelines from json file
				jQuery.getJSON(source, function(data) {
					timelines = [];
					for (var i = 0; i < data.items.length; i++) {
						timelines.push(data.items[i]);
					}

					// Sort timelines by time
					if (time == 'desc') {
						timelines.sort(sortByTimeDesc);
					} else {
						timelines.sort(sortByTimeAsc);
					}
						
					// Create timelines slider
					createTimelines(timeline_contain);
				});
			} else if (type == 'php' && source != '') { // Get timelines from php file via ajax
				var ajaxData = {
					action: source,
					nonce: wpnonce
				};
				jQuery.ajax({
					url: wp_pbyteshub_localize.ajaxurl,
					dataType: 'json',
					type: 'POST',
					data: ajaxData,
					error: function(error) {
						console.error('Timeline AJAX event { '+source+' } didn\'t working!!! \n Please contact your developer to resolved this.');
					},
					success: function(data) {
						timelines = [];
						console.log(data);
						for (var i = 0; i < data.length; i++) {
							timelines.push(data[i]);
						}

						// Sort timelines by time
						if (time == 'desc') {
							timelines.sort(sortByTimeDesc);
						} else {
							timelines.sort(sortByTimeAsc);
						}
						
						// Create timelines slider
						createTimelines(timeline_contain);
					}
				});
			}
		});
	});
})(jQuery);