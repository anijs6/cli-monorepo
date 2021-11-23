import webpack from 'webpack'
import getWebpackConfig from '@anijs/cli-webpack-config'
import webpackDevServer from 'webpack-dev-server'
import type { ServeOptions } from '../cli.interface'
import ServeData from './ServeData'

class Serve extends ServeData {
  constructor(options: ServeOptions) {
    super()
    this.options = options
  }

  /**
   * 启动webpack编译
   */
  async compile() {
    const webpackConfig = getWebpackConfig({
      mode: this.options.mode || 'development'
    })
    const webpackCompiler = webpack(webpackConfig)
    // eslint-disable-next-line new-cap
    const server = new webpackDevServer(webpackCompiler, webpackConfig.devServer || {})
    await server.start()
  }
}

export default Serve
