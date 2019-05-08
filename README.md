# HTML Starter

Kick-start your project with [Bootstrap](https://getbootstrap.com/), the world's most popular framework and modern development workflow.
This boilerplate with [Webpack](https://webpack.js.org/) based setup helps you build web apps and sites much faster.

## Features

* **[Webpack 4](https://webpack.js.org/)** - module bundler (automatically concatenate files, write CSS with Sass, check JS for errors, optimize images...)
* **[Bootstrap 4](http://getbootstrap.com/)** - the most popular HTML, CSS and JS framework
* [HTML5 Boilerplate](https://html5boilerplate.com/) - the web’s most popular front-end template
* [Sass](https://sass-lang.com/) - CSS preprocessor
* [Font Awesome 5](https://fontawesome.com/) - the web's most popular vector icons and social logos
* [Autoprefixer](https://autoprefixer.github.io/) - plugin to parse CSS and add vendor prefixes
* [Babel](https://babeljs.io/) - toolchain to convert ES6+ code into a backwards compatible
* [ESLint](https://eslint.org/) - linting utility for JavaScript
* [webpack-dev-server](https://github.com/webpack/webpack-dev-server) - live reloading (browser update after changes)
* [Google Fonts](https://fonts.google.com/) - libre licensed fonts

#### [Bootstrap 4](http://getbootstrap.com/) is dependent on:

* [jQuery](http://jquery.com/) - JavaScript library
* [Popper](http://popper.js.org/) - tooltips and popovers library

## Theme development

[Node.js](http://nodejs.org/) is the only required dependency to work with *HTML Starter*.


#### Installation

1. Install [Node.js](http://nodejs.org/) (installation depends on your system). After finishing, you will be able to 
check the version number using `node -v` and `npm -v` commands 
([npm is distributed with Node.js](https://www.npmjs.com/get-npm)).
2. It is recommended to install the latest version of [Yarn](https://yarnpkg.com/en/docs/install).
3. Clone the repo using `git clone https://github.com/cichy380/html-starter-bs4-webpack.git` or [download HTML Starter](https://github.com/cichy380/html-starter-bs4-webpack/archive/master.zip).
4. Open folder **html-starter-bs4-webpack** (command: `cd html-starter-bs4-webpack`) and install necessary dependencies of Starter via command: `yarn` (recommended) or `npm install`. 

You now have all the necessary dependencies to run the build process.

#### Build commands

* `yarn start` or `npm run start` ─ compile assets when file changes are made, start [webpack-dev-server](https://github.com/webpack/webpack-dev-server) session
* `yarn build` or `npm run build` ─ compile and optimize (the files in your assets directory) for production

### Structure

Shorten directories and files structure which you'll see after build: 

```
html-starter-bs4-webpack/
├── assets/                         # template assets
│   ├── fonts/                      # place template fonts files here
│   ├── html/                       # template HTML files
│   │  ├── partials/                # common parts of HTML code
│   │  │  └── [...]
│   │  ├── 404.html                 # placeholder 404 error page
│   │  └── index.html               # default HTML skeleton
│   ├── images/                     # template images files
│   │  └── [...]
│   ├── scripts/                    # template javascript files
│   │  ├── vendor/                  # necessary parts of frameworks and libs
│   │  │  └── [...]                 # Bootstrap, FontAwesome, jQuery
│   │  └── main.js                  # main javascript file that references JS source files
│   ├── scss/                       # template styles
│   │  ├── [...]                    # 7-1 Sass architecture folders
│   │  └── main.scss                # main Sass file that references scss source files
│   ├── index.js                    # entry point of template
│   └── [...]                       # miscellaneous
├── dist/                           # output folder with production build (don't edit)
│   ├── css/                        # output styles
│   ├── images/                     # output images
│   ├── js/                         # output javascripts
│   ├── index.html                  # homepage
│   └── [...]                       # miscellaneous
├── node_modules/                   # Node.js packages (don't edit)
│   └── [...]
├── .babelrc                        # Babel configuration file
├── .eslintrc.js                    # ESLint configuration file
├── package.json                    # Node.js dependencies and scripts
├── webpack.config.js               # Webpack configuration file
├── yarn.lock                       # Yarn lock file (don't edit)
└── [...]                           # other...
```

## Demo

Sample of *HTML Starter* usage placed in separate branche:
 * [demo branch](https://github.com/cichy380/html-starter-bs4-webpack/tree/demo) - simple corporate website

## License

Code released under the [MIT license](https://github.com/cichy380/html-starter-bs4-webpack/blob/master/LICENSE.md).
