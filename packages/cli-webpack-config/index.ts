import type { Configuration } from 'webpack'
import developmentConfig from './webpack.development'
import productionConfig from './webpack.production'
import type { CommonConfigOptions } from './webpack.interface'

/**
 * 获取webpack公共配置
 *
 * @param options 配置参数
 * @returns webpack公共配置
 */
export default function getConfig(options: CommonConfigOptions): Configuration {
  const mode = options?.mode
  if (mode === 'production') return productionConfig(options)
  return developmentConfig(options)
}
