const soynode = require('soynode')
const fs = require('fs-extra')

// Using https://github.com/Medium/soynode
soynode.setOptions({
    outputDir: './tmp',
    uniqueDir: false,
    concatOutput: true,
    concatFileName: 'gcweb-fr'
})

// Builds /dist/ folder:
function compile () {
  try {

    // compile Soy file from ./_src/soy into ./tmp folder
    soynode.compileTemplates('./_src/soy/gcweb/fr', function() {fs.copy('./tmp/gcweb-fr.soy.concat.js', './dist/gcweb-fr.js')})
    console.log('Soy compiled')

  } catch (err) {
    console.error(err)
  }
}

compile()