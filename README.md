# Centrally Deployed Templates Solution (CDTS)

The purpose of the Centrally Deployed Templates Solution (CDTS) is essentially to deliver the presentation layer of the `Canada.ca` or `intranet.canada.ca` themes to web assets. It decouples the presentation layer from the business logic of a static website or web application and allows rapid updates across multiple networks.

Please visit [our documentation](https://cenw-wscoe.github.io/sgdc-cdts/docs/index-en.html) for more information about the project.

## Working with this repository

### Requirements

To work with this project you will need node.js and npm installed. This project was created with:

* node.js v14.2.0
* npm 6.14.4

**For ESDC employees** Please read [ESDC Development Setup](https://github.com/esdc-devcop/ESDC-Development-Setup) if it's your first time connecting to github from your work computer.

### Security

Please see [SECURITY.md](https://github.com/wet-boew/cdts-sgdc/blob/master/SECURITY.md) for more information.

#### Install dependencies

Clone this repository to a local directory. On the command line move to the cloned directory ( this directory should contain the package.json file) and run : `$ npm install`.
This command will read the package.json and install the npm dependencies to the *node_modules* directory.

#### Builds

This project uses the [nodeJS](https://nodejs.org/en/) and [npm](https://nodejs.org/en/) modules to get the dependencies needed, build, minify and deploy the final JavaScript modules.

#### Development

To create a development build of the modules on the command line move to the cloned directory and run: `$ npm run build`

The target files will be outputed to the `dist` directory.

See `package.json` for other npm scripts and `Grunfile.js` for other grunt tasks.

Please see:
  - [README-Localization.md](https://github.com/wet-boew/cdts-sgdc/blob/master/README-Localization.md) for details and how template source code now supports multiple languages.
  - [README-EJS.md](https://github.com/wet-boew/cdts-sgdc/blob/master/README-EJS.md) for information on working with EJS and how it compares to the old SOY templates.

## License

Unless otherwise noted, the source code of this project is covered under Crown Copyright, Government of Canada, and is distributed under the [MIT License](https://github.com/wet-boew/cdts-sgdc/blob/master/LICENSE).

The Canada wordmark and related graphics associated with this distribution are protected under trademark law and copyright law. No permission is granted to use them outside the parameters of the Government of Canada's corporate identity program. For more information, see Federal identity requirements.
