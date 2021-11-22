/* eslint-disable no-use-before-define */
import type { Configuration } from 'webpack'

/**
 * @param options 配置项
 * @returns webpack公共配置
 */
function getCommonConfig(options: CommonConfigOptions): Configuration {
  const { mode } = options || {}

  const entry = options.entryConfig ||
  return {
    context: process.cwd(),
    mode,
    target: mode === 'development' ? 'web' : 'browserslist'
  }
}

interface CommonConfigOptions {
  mode: 'development' | 'production'
  /** webpack entry配置 */
  entryConfig?: Configuration['entry']
}

export default getCommonConfig
