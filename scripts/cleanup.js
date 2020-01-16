const fs = require('fs-extra')

// Delete tmp folder after compile is done
fs.remove('./tmp', err => {
    if (err) return console.error(err)
  
    console.log('tmp deleted!')
  })

