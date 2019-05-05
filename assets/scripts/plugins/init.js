/**
 * @fileoverview Initialization of the jQuery plugins
 */

import './css-dependent-on-scroll'

/**
 * Appearance of header shadow when scroll page
 */
$('.header').cssDependentOnScroll({className: 'shadow'})
