/* eslint-disable no-use-before-define */
import type { Configuration } from 'webpack'
import { autoWebpackEntryFile } from '@anijs/cli-shared-utils'

/**
 * @param options 配置项
 * @returns webpack公共配置
 */
function getCommonConfig(options: CommonConfigOptions): Configuration {
  const { mode } = options || {}

  const entry = options.entryConfig || formateEntry(autoWebpackEntryFile())
  return {
    context: process.cwd(),
    mode,
    target: mode === 'development' ? 'web' : 'browserslist',
    entry
  }
}

/**
 * 格式化webpack entry配置
 *
 * @param entryFile 入口文件
 * @returns Entry标准配置
 */
function formateEntry(entryFile: string): Configuration['entry'] {
  return {
    main: entryFile
  }
}

interface CommonConfigOptions {
  mode: 'development' | 'production'
  /** webpack entry配置 */
  entryConfig?: Configuration['entry']
}

export default getCommonConfig
