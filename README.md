# HTML Starter

This boilerplate with [Webpack](https://webpack.js.org/) based setup helps you build web apps and sites much faster. Kick-start your project with 
popular development workflow.

## Features

* **[Webpack 4](https://webpack.js.org/)** - module bundler (write CSS with Sass, automatically check JS 
for errors, optimize images...)
* **[Bootstrap 4](http://getbootstrap.com/)** - the most popular HTML, CSS and JS framework
* [Sass](https://sass-lang.com/) - CSS preprocessor
* [Font Awesome 5](https://fontawesome.com/) - the web's most popular vector icons and social logos
* [Autoprefixer](https://autoprefixer.github.io/) - plugin to parse CSS and add vendor prefixes
* [Babel](https://babeljs.io/) - toolchain to convert ES6+ code into a backwards compatible
* [webpack-dev-server](https://github.com/webpack/webpack-dev-server) - live reloading (browser update after changes)

#### [Bootstrap 4](http://getbootstrap.com/) is dependent on:

* [jQuery](http://jquery.com/) - JavaScript library
* [Popper](http://popper.js.org/) - tooltips and popovers library

## Theme development

[Node.js](http://nodejs.org/) is the only required dependency to work with HTML Starter.


#### Installation

1. Install [Node.js](http://nodejs.org/) (installation depends on your system). After finishing, you will be able to 
check the version number using `node -v` and `npm -v` commands 
([npm is distributed with Node.js](https://www.npmjs.com/get-npm)).
2. I recommend you to install the latest version of [Yarn](https://yarnpkg.com/en/docs/install).
3. Clone the repo using `git clone https://github.com/cichy380/html-starter-bs4-webpack.git` or [download HTML Starter](https://github.com/cichy380/html-starter-bs4-webpack/archive/master.zip).
4. Open folder **html-starter-bs4-webpack** (command: `cd html-starter-bs4-webpack`) and install necessary dependencies of Starter via command: `yarn` (recommended) or `npm install`. 

You now have all the necessary dependencies to run the build process. HTML Starter uses [Webpack](https://webpack.js.org/) as its build system.

#### Build commands

* `yarn start` or `npm run start` - compile assets when file changes are made, start [webpack-dev-server](https://github.com/webpack/webpack-dev-server) session
* `yarn build` or `npm run build` - compile and optimize (the files in your assets directory) for production

## License

Code released under the [MIT license](https://github.com/cichy380/html-starter-bs4-webpack/blob/master/LICENSE.md).
