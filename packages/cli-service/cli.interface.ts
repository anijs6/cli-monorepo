export interface ServeOptions {
  /**
   * 指定webpack配置文件的路径
   *
   * @example
   * ./webpack.config.js
   */
  config?: string
  /**
   * 启动模式
   *
   * @default process.env.NODE_ENV
   */
  mode?: 'development' | 'production'
}
