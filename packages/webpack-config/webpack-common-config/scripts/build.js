const { build } = require('esbuild')
const { nodeExternalsPlugin } = require('esbuild-node-externals')
const { dependencies, peerDependencies } = require('../package.json')

const shared = {
  entryPoints: ['index.ts'],
  bundle: true,
  external: [...Object.keys(dependencies), ...Object.keys(peerDependencies), 'path']
}

build({
  ...shared,
  outfile: 'dist/index.js'
})

build({
  ...shared,
  outfile: 'dist/index.esm.js',
  format: 'esm'
})
