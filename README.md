# Centrally Deployed Templates Solution (CDTS)

[![Build Status](https://secure.travis-ci.org/wet-boew/cdts-sgdc.svg?branch=master)](https://travis-ci.org/wet-boew/cdts-sgdc)
[![devDependency Status](https://david-dm.org/wet-boew/cdts-sgdc/dev-status.svg)](https://david-dm.org/wet-boew/cdts-sgdc#info=devDependencies)

The purpose of the [Centrally Deployed Templates Solution (CDTS)](https://github.com/wet-boew/cdts-sgdc) is essentially to deliver the presentation layer of the `Canada.ca` or `intranet.canada.ca` themes to web assets. It decouples the presentation layer from the business logic of a static website or web application and allows rapid updates across multiple networks.

Please visit [our documentation](https://cenw-wscoe.github.io/sgdc-cdts/docs/index-en.html) for more information about the project.

## Working with this repository

### Requirements

To work with this project you will need node.js and npm installed. This project was created with:

* node.js v12.14.0
* npm 6.13.4
* java version "1.8.0_201"
* Java(TM) SE Runtime Environment (build 1.8.0_201-b26)

**For ESDC employees** Please read [ESDC Proxy Scripts](https://github.com/esdc-devcop/ESDC-Development-Setup/blob/master/proxy-scripts.md) if it's your first time connecting to github from your work computer. 

### Security

Please see [SECURITY.md](https://github.com/wet-boew/cdts-sgdc/blob/master/SECURITY.md) for more information.

#### Install dependencies
Clone this repository to a local directory. On the command line move to the cloned directory ( this directory should contain the package.json file) and run : `$ npm install`.
This command will read the package.json and install the npm dependencies to the *node_modules* directory.

#### Builds

The _soy_ files are compiled with [grunt-soy-compile](https://www.npmjs.com/package/grunt-soy-compile).

This project uses the [nodeJS](https://nodejs.org/en/) and [npm](https://nodejs.org/en/) modules to get the dependencies needed, build, minify and deploy the final JavaScript modules.

#### Development
To create a development build of the modules on the command line move to the cloned directory and run: `$ npm run build`

This command will:

1. Empty the `dist` and `tmp` folder
2. Compile the soy files using [grunt-soy-compile](https://www.npmjs.com/package/grunt-soy-compile) into the `tmp` folder
3. Copy and rename and concat the compiled `js` files into the `dist`
4. Copy the `gcweb` and `wet-boew` files from the `node_modules` folder in the `dist` 
5. Copy all the other assets (JS, CSS, HTML) files from the `_src` in the `dist/cdts` folder
6. Delete the `tmp` folder

#### To Do:

* Setup git [submodules](https://git-scm.com/book/en/v2/Git-Tools-Submodules) for sample pages, added issue [#7](https://github.com/wet-boew/cdts-sgdc/issues/7)
* Use a CI to tests source code, added issue [#8](https://github.com/wet-boew/cdts-sgdc/issues/8)
* Use CI to deploy `dist` folder to servers, added issue [#9](https://github.com/wet-boew/cdts-sgdc/issues/9)

#### Related repositories

##### [cdts-sgdc-cdn](https://github.com/wet-boew/cdts-sgdc-cdn)

Used to host the `dist` folder to be able to pull to different servers. [Travis.CI](https://travis-ci.org/wet-boew/cdts-sgdc) is used to build and then deploy to these secondary repositories within the coffee scripts. Will create a branch with the curent version number. And tags for releases. 

##### [cdts-sgdc-dist](https://github.com/wet-boew/cdts-sgdc-dist)

Not sure what this is for but WET has it. Might get rid of it, might keep it. WET uses to host all their working files.

##### [cdts-sgdc-releases](https://github.com/wet-boew/cdts-sgdc-releases)

Holds all the releases so that servers can pull from this repository onto the CDNs.

#### Grunt tasks scripts breakdown

##### default: `npx grunt`

Default task that runs the core unminified `build`

##### dist: `npx grunt dist`

Produces the production files, which is `build` + `minify`

##### build: `npx grunt build`

Run full build.

##### minify: `npx grunt minify`

Minify built files.

##### deploy: `npx grunt deploy`

Build and deploy artifacts to cdts-sgdc-cdn (Only works on Travis-ci.org)

## Nice to have

* Sass or post-css
* Something to generate the sample HTML files (jekyll)

## New DNS structure

We would like to setup a new DNS new path for the CDTS JS files.

Looking at maybe one of these:

* sgdc-cdts.canada.ca/v1.0.1/cdts/js/gcweb-en.js
* cdts.canada.ca/v1.0.1/cdts/js/gcweb-en.js
* sgdc.canada.ca/v1.0.1/cdts/js/gcweb-en.js

## License

Unless otherwise noted, the source code of this project is covered under Crown Copyright, Government of Canada, and is distributed under the [MIT License](https://github.com/wet-boew/cdts-sgdc/blob/master/LICENSE).

The Canada wordmark and related graphics associated with this distribution are protected under trademark law and copyright law. No permission is granted to use them outside the parameters of the Government of Canada's corporate identity program. For more information, see Federal identity requirements.
