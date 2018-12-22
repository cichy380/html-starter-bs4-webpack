/**
 * @fileoverview Initialization of the jQuery plugins and managements of the configuration settings for them
 */

import jQuery from 'jquery'

(function ($) {
  /**
   * Enable tooltips
   * Initialize all tooltips on a page by select them by their data-toggle attribute
   * https://getbootstrap.com/docs/4.1/components/tooltips/#example-enable-tooltips-everywhere
   */
  $('[data-toggle="tooltip"]').tooltip()

})(jQuery)
