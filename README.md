## Plugin Name

> Contributors: Vishal Padhariya
> 
> Donate link: 
> 
> 
> Tags: comments, spam
> 
> 
> Requires at least: 3.0.1
> 
> 
> Tested up to: 3.4
> 
> 
> Stable tag: 4.3
> 
> 
> License: GPLv2 or later
> 
> 
> License URI: [http://www.gnu.org/licenses/gpl-2.0.html](http://www.gnu.org/licenses/gpl-2.0.html)

## Usage

To display a timeline on a page, just add a div element with structure:

> \<div class="quick-timeline" data-source="json" data-source="json_file_path" data-style="1">\</div>
> \<div class="quick-timeline" data-source="php"  data-source="get_all_timelines" data-nonce="\<?= wp\_create\_nonce('nonce\_name') ?>" data-style="1">\</div>

**In which:**

*   data-type ="json": type of timeline. There are 2 options: JSON (feed timelines from JSON file) or PHP (feed timelines from PHP file). Default value: JSON.
*   data-style="1": style of timeline. There are 5 styles now as shown in the demo. Default value: 1.
*   data-source: If the type is JSON then in the source attribute you have to add the path of the JSON file else the action name of ajax that you are using for retrieving the data.
*   data-nonce="\<?= wp\_create\_nonce("nonce\_name") ?>": Set nonce for ajax call while the type is PHP.

**Other option params:**

*   data-items="3": Number of items to display on a timeline. Default value: 5.
*   data-position="left": position of content on a timeline. There are 3 options: left, right, and both. Default value: right.
*   data-time="asc": The order of timelines via time. There are 2 options: asc, desc. Default value: asc. Note: The time is calculated based on 3 fields: day, month, and year. So don't forget to enter the correct-format data for these fields, like the demo on the JSON file.  
    "day": "10",  
    "month": "09",  
    "year": "2012",
*   data-icon="true": use or not use icon on timeline. There are 2 options: true, and false. Default value: true. The icon uses a simple-line-icon library. The icon mode is used in timeline styles 2,3,4,5.
*   data-autoplay="true": autoplay the timeline slider (style 1,2,3). Default value: true.
*   data-loop="true": loop the items on the timeline slider (style 1,2,3). Default value: true.

## Installation

Upload \`quick-timeline.php\` to the \`/wp-content/plugins/\` directory

Activate the plugin through the 'Plugins' menu in WordPress

Place \`\<?php do\_action('plugin\_name\_hook'); ?>\` in your templates