const { resolve } = require('path')
const ROOTDIR = resolve(__dirname, '../../')

module.exports = {
  root: ROOTDIR,
  outputPath: resolve(__dirname, ROOTDIR, 'build'),
  entryPath: resolve(__dirname, ROOTDIR, 'src/index.tsx'),
  templatePath: resolve(__dirname, ROOTDIR, 'src/index.html'),
}
