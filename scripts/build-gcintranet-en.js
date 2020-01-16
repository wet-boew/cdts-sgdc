const soynode = require('soynode')
const fs = require('fs-extra')

// Using https://github.com/Medium/soynode
soynode.setOptions({
    outputDir: './tmp',
    uniqueDir: false,
    concatOutput: true,
    concatFileName: 'gcintranet-en'
})

// Builds /dist/ folder:
function compile () {
  try {

    // compile Soy file from ./_src/soy into ./tmp folder
    soynode.compileTemplates('./_src/soy/gcintranet/en', function() {fs.copy('./tmp/gcintranet-en.soy.concat.js', './dist/gcintranet-en.js')})
    console.log('Soy compiled')

  } catch (err) {
    console.error(err)
  }
}

compile()


