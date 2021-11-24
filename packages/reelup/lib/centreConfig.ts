import type { BuildOptions } from 'esbuild'
import type { CliOptions } from '../interface'

type StaticConfigKey = Exclude<CliOptions['type'], undefined>

/**
 * 静态配置类型
 */
const CentreConfig: { [key in StaticConfigKey]?: BuildOptions } = {
  node: {}
}

export default CentreConfig
