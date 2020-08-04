/* eslint-disable @typescript-eslint/no-var-requires, no-global-assign */
require = require('esm')(module)
require('esbuild-register/register')

module.exports = (path, github, context, core) => {
  return require(path)(github, context, core)
}
