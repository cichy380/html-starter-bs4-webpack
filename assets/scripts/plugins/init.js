/**
 * @fileoverview Initialization of the jQuery plugins
 */

import { TOOLTIPS_SETTINGS } from '../config'

import './css-dependent-on-scroll'

/**
 * Enable tooltips
 * Initialize all tooltips on a page by select them by their data-toggle attribute
 * https://getbootstrap.com/docs/4.1/components/tooltips/#example-enable-tooltips-everywhere
 */
$('[data-toggle="tooltip"]').tooltip(TOOLTIPS_SETTINGS)

/**
 * Appearance of header shadow when scroll page
 */
$('.header').cssDependentOnScroll({className: 'shadow'})
