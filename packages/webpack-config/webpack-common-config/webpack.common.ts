/* eslint-disable no-use-before-define */
import type { Configuration } from 'webpack'
import { theBase } from './lib'
import type { CommonConfigOptions } from './webpack.interface'

/**
 * @param options 配置项
 * @returns webpack公共配置
 */
function getCommonConfig(options: CommonConfigOptions): Configuration {
  return {
    ...theBase(options)
  }
}

export default getCommonConfig
