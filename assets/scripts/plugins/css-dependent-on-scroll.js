const pluginName = 'cssDependentOnScroll'
const defaults = {
  offset: 0,
  className: 'scrolled'
}

const $window = $(window)

function Plugin (element, options) {
  this.element = element
  this.$element = $(element)
  this.options = $.extend({}, defaults, options)

  this.init()
}

Plugin.prototype = {

  init: function () {
    this.control(this.$element, this.options)
    $window.scroll(() => this.control(this.$element, this.options))
  },

  control: function ($el, options) {
    if ($window.scrollTop() > options.offset) {
      $el.addClass(options.className)
    }
    else {
      $el.removeClass(options.className)
    }
  }
}

$.fn[pluginName] = function (options) {
  return this.each(function () {
    if (!$.data(this, `plugin_${pluginName}`)) {
      $.data(this, `plugin_${pluginName}`,
        new Plugin(this, options))
    }
  })
}
