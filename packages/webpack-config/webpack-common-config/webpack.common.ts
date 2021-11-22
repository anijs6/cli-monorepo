import type { Configuration } from 'webpack'
import { merge } from 'webpack-merge'
import { baseConfig, htmlConfig, svgConfig } from './lib'
import type { CommonConfigOptions } from './webpack.interface'

/**
 * @param options 配置项
 * @returns webpack公共配置
 */
function getCommonConfig(options: CommonConfigOptions): Configuration {
  return merge(baseConfig(options), htmlConfig(options), svgConfig(options))
}

export default getCommonConfig
