import { Configuration } from 'webpack'

export interface CommonConfigOptions {
  mode: 'development' | 'production'
  /** webpack entry配置 */
  entryConfig?: Configuration['entry']
  /** html入口文件 */
  htmlFile?: string
}
