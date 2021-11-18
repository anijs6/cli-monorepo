/* eslint-disable no-use-before-define */
import type { Configuration } from 'webpack'

/**
 * @param options 配置项
 * @returns webpack公共配置
 */
function getCommonConfig(options: CommonConfigOptions): Configuration {
  const { mode } = options || {}

  return {
    context: process.cwd(),
    mode,
    target: mode === 'development' ? 'web' : 'browserslist'
  }
}

interface CommonConfigOptions {
  mode: 'development' | 'production'
}

export default getCommonConfig
