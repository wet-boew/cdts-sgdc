const soynode = require('soynode')
const fs = require('fs-extra')

// Using https://github.com/Medium/soynode
soynode.setOptions({
    outputDir: './tmp',
    uniqueDir: false,
    concatOutput: true,
    concatFileName: 'gcintranet-fr'
})

// Builds /dist/ folder:
function compile () {
  try {

    // compile Soy file from ./_src/soy into ./tmp folder
    soynode.compileTemplates('./_src/soy/gcintranet/fr', function() {fs.copy('./tmp/gcintranet-fr.soy.concat.js', './dist/gcintranet-fr.js')})
    console.log('Soy compiled')

  } catch (err) {
    console.error(err)
  }
}

compile()