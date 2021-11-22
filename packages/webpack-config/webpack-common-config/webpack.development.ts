import type { Configuration } from 'webpack'
import { merge } from 'webpack-merge'
import type { CommonConfigOptions } from './webpack.interface'
import webpackCommonConfig from './webpack.common'

/**
 * 开发环境配置
 *
 * @param options 配置参数
 * @returns 开发环境的配置
 */
function developmentConfig(options: CommonConfigOptions): Configuration {
  return merge(webpackCommonConfig(options), {
    mode: 'development',
    devtool: 'eval'
  })
}

export default developmentConfig
