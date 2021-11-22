import type { Configuration } from 'webpack'
import { getEntryFile } from '@anijs/cli-shared-utils'
import type { CommonConfigOptions } from '../webpack.interface'

/**
 * 基础配置
 *
 * @param options 传递数据
 * @returns webpack基础配置
 */
export default function theBase(options: CommonConfigOptions): Configuration {
  const { mode } = options || {}

  const entry = options.entryConfig || formateEntry(getEntryFile())
  return {
    context: process.cwd(),
    mode: options.mode,
    target: mode === 'development' ? 'web' : 'browserslist',
    entry,

    // FIXME: 关闭webpack5向后兼容，可以提高一定的性能
    experiments: {
      backCompat: false
    }
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
