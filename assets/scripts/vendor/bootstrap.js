/**
 * @fileoverview Bootstrap 4
 * @link http://getbootstrap.com
 */

// import only the necessary plugins individually
import 'bootstrap/js/dist/util'
import 'bootstrap/js/dist/alert'
import 'bootstrap/js/dist/button'
import 'bootstrap/js/dist/carousel'
import 'bootstrap/js/dist/collapse'
import 'bootstrap/js/dist/dropdown'
import 'bootstrap/js/dist/modal'
import 'bootstrap/js/dist/scrollspy'
import 'bootstrap/js/dist/tab'
import 'bootstrap/js/dist/toast'
import 'bootstrap/js/dist/tooltip'
import 'bootstrap/js/dist/popover'


/**
 * Initializations of Bootstrap plugins
 */

import { TOOLTIPS_SETTINGS } from '../config'

// Enable tooltips
// Initialize all tooltips on a page by select them by their data-toggle attribute
// https://getbootstrap.com/docs/4.1/components/tooltips/#example-enable-tooltips-everywhere
$('[data-toggle="tooltip"]').tooltip(TOOLTIPS_SETTINGS)
