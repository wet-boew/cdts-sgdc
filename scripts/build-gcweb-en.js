const soynode = require('soynode')
const fs = require('fs-extra')

// Using https://github.com/Medium/soynode
soynode.setOptions({
    outputDir: './tmp',
    uniqueDir: false,
    concatOutput: true,
    concatFileName: 'gcweb-en'
})

// Builds /dist/ folder:
function compile () {
  try {

    // compile Soy file from ./_src/soy into ./tmp folder
    soynode.compileTemplates('./_src/soy/gcweb/en', function() {fs.copy('./tmp/gcweb-en.soy.concat.js', './dist/gcweb-en.js')})
    console.log('Soy compiled')

  } catch (err) {
    console.error(err)
  }
}

compile()