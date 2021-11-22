import { Configuration } from 'webpack'

export interface CommonConfigOptions {
  mode: 'development' | 'production'
  /** webpack entry配置 */
  entryConfig?: Configuration['entry']
}
