/**
 * @fileoverview Custom project code...
 */

const $window = $(window)
const $header = $('.header')


// appearance of header shadow when scroll page

let controlHeaderShadow = () => {
  if ($window.scrollTop() > 0) {
    $header.addClass('shadow')
  }
  else {
    $header.removeClass('shadow')
  }
}

controlHeaderShadow()
$window.scroll(controlHeaderShadow)
