/* eslint-disable @typescript-eslint/no-var-requires, no-global-assign */
const r = require('esm')(module)
r('esbuild-register/register')

module.exports = (path, github, context, core) => {
  return r(path)(github, context, core)
}
