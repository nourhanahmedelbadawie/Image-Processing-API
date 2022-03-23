const fs = require('fs')

export const checkForImageExist = (path: string): boolean => {
  if (fs.existsSync(path)) {
    return true
  } else {
    return false
  }
}

