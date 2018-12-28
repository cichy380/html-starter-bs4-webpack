/**
 * @fileoverview Font Awesome 5
 * @link https://fontawesome.com/how-to-use/with-the-api/
 */

import { library, dom } from '@fortawesome/fontawesome-svg-core'



// Solid
// https://fontawesome.com/icons?d=gallery&s=solid&m=free
import { fas } from '@fortawesome/free-solid-svg-icons'

// Regular
// https://fontawesome.com/icons?d=gallery&s=regular&m=free
import { far } from '@fortawesome/free-regular-svg-icons'

// Brands
// https://fontawesome.com/icons?d=gallery&s=brands&m=free
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fas, far, fab)

// or

// to subset a large number of icons into only the icons that you are using
// import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'
// import { faPaperPlane } from '@fortawesome/free-regular-svg-icons'
// library.add(faPhone, faEnvelope, faPaperPlane)



// automatically find any <i> tags in the page and replace those with <svg> elements
// https://fontawesome.com/how-to-use/with-the-api/methods/dom-i2svg
dom.i2svg()

// or

// if content is dynamic
// watch the DOM automatic for any additional icons being added or modified
// https://fontawesome.com/how-to-use/with-the-api/methods/dom-watch
// dom.watch()
