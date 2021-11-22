import type { Configuration } from 'webpack'
import type { CommonConfigOptions } from '../webpack.interface'

/**
 * 处理svg资源
 *
 * @param options 配置数据
 * @returns svg资源相关的webpack配置
 */
function imageConfig(options: CommonConfigOptions): Configuration {
  return {
    module: {
      rules: [
        {
          test: /\.(gif|png|jpg|jpeg|webp)$/i,
          type: 'asset',
          generator: {
            filename: 'assets/[name].[contenthash:6][ext][query]'
          },
          parser: {
            dataUrlCondition: {
              maxSize: 600
            }
          }
        }
      ]
    }
  }
}

export default imageConfig
