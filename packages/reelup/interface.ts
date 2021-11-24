import type { BuildOptions } from 'esbuild'

/**
 * 命令行接收的参数
 */
export interface CliOptions {
  /**
   * 编译类型
   *
   * @default node
   */
  type?: 'node' | 'webjs' | 'react' | 'vue'
  /** reelup配置文件地址 */
  config?: string
}

/**
 * 可配置数据
 */
export interface ConfigProps extends CliOptions, BuildOptions {}
