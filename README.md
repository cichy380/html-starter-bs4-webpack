# HTML Starter version 2

HTML Starter helps front-end developers build websites based on advance technologies. Responsive templates include [Bootstrap 4](https://getbootstrap.com/) in your project using [Webpack](https://webpack.js.org/).

## Requirements

| Prerequisite      | How to check         | How to install
| ----------------- | -------------------- | ------------- |
| Node.js >= 6.11.5 | `node -v`            | [nodejs.org](http://nodejs.org/) |
| npm >= 4.6.0      | `npm -v`             | [npm is distributed with Node.js](https://www.npmjs.com/get-npm) |
| Yarn >= 1.6.0     | `yarn --version`     | [installation](https://yarnpkg.com/en/docs/install) |
| Webpack >= 4.x    | `webpack -v`         | `yarn add webpack --dev` |

## Features

* [Webpack 4](https://webpack.js.org/) module bundler
* [Bootstrap 4](http://getbootstrap.com/) the most popular HTML, CSS and JS framework
* [Font Awesome 5](https://fontawesome.com/) the web's most popular vector icons and social logos
* [Autoprefixer](https://autoprefixer.github.io/) plugin to parse CSS and add vendor prefixes
* [Babel](https://babeljs.io/) toolchain to convert ES6+ code into a backwards compatible
* [webpack-dev-server](https://github.com/webpack/webpack-dev-server) live reloading (browser update after changes)

### Bootstrap is dependent on:

* [jQuery](http://jquery.com/) javascript library
* [Popper](http://popper.js.org/) tooltips and popovers library

For Bootstrap to compile, make sure you install and use the required loaders: sass-loader, postcss-loader with Autoprefixer.

## Theme development

HTML Starter uses [Webpack](https://webpack.js.org/) as its build system.

### Tools

Building the template requires [Node.js](http://nodejs.org/download/). I recommend you installation to the latest 
version of [Yarn](https://yarnpkg.com/en/docs/install). From the command line run `yarn add package.json` 
(recommended) or `npm install`.

You now have all the necessary dependencies to run the build process.

### Available Webpack commands

* `webpack` — Compile assets for developing (with source maps, without minify)
* `webpack --watch` — Compile assets when file changes are made
* `webpack -p` — Compile and optimize the files in your assets directory

## License

Code released under the MIT license.
