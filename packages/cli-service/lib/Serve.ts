import webpack from 'webpack'
import getWebpackConfig from '@anijs/cli-webpack-config'
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
  compile() {
    const webpackConfig = getWebpackConfig({
      mode: this.options.mode || 'development'
    })
    const webpackCompiler = webpack(webpackConfig)
  }
}

export default Serve
