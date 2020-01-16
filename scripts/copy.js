const fs = require('fs-extra')

// Builds /dist/ folder:
async function copy () {
  try {

    // copy all HTML files from _src into ./dist folder
    await fs.copy('./_src/html', './dist')
    console.log('HTML copied!')

    // copy all wet-boew from ./lib folder into ./dist folder
    await fs.copy('./node_modules/wet-boew', './dist/wet-boew')
    console.log('wet-boew copied!')
    
    // copy all gcweb from ./node_modules folder into ./dist folder
    await fs.copy('./node_modules/gcweb', './dist/gcweb')
    console.log('GCWeb copied!')

    // copy Soy Utility JS from ./_src/js folder into ./dist folder
    await fs.copy('./_src/js/soyutils.js', './dist/soyutils.js')
    console.log('Soy Utils JS copied')

    // copy custom JS from ./_src/js folder into ./dist/cdts/js folder
    await fs.copy('./_src/js/cdtscustom.js', './dist/cdts/js/cdtscustom.js')
    console.log('custom JS copied')

    // copy exitScript JS from ./_src/js folder into ./dist/cdts/js folder
    await fs.copy('./_src/js/exitScript.js', './dist/cdts/js/exitScript.js')
    console.log('custom JS copied')

    // copy all custom CSS from ./_src/css folder into ./dist/cdts/css folder
    await fs.copy('./_src/css', './dist/cdts/css')
    console.log('custom CSS copied')

    // copy all AJAX from ./_src/ajaz folder into ./dist/cdts/ajax folder
    await fs.copy('./_src/ajax', './dist/cdts/ajax')
    console.log('custom AJAX copied')

  } catch (err) {
    console.error(err)
  }
}

copy()

