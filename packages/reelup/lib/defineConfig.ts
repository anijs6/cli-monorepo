import type { ConfigProps } from '../interface'

/**
 * 定义打包配置
 *
 * @param config 用户配置
 * @returns 用户配置数据
 */
function defineConfig(config: ConfigProps): ConfigProps {
  return config || {}
}

export default defineConfig
