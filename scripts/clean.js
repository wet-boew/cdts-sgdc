const fs = require('fs-extra')

// Builds /dist/ folder:
async function clean () {
  try {

    // empty ./tmp and ./dist folders
    await fs.emptyDir('./tmp')
    console.log('tmp cleared!')
    await fs.emptyDir('./dist')
    console.log('dist cleared!')

} catch (err) {
    console.error(err)
  }
}

clean()

