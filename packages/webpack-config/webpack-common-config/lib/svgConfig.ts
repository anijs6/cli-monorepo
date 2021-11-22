import type { Configuration } from 'webpack'
import path from 'path'
import SpriteLoaderPlugin from 'svg-sprite-loader/plugin'
import type { CommonConfigOptions } from '../webpack.interface'

/**
 * 处理svg资源
 *
 * @param options 配置数据
 * @returns svg资源相关的webpack配置
 */
function svgConfig(options: CommonConfigOptions): Configuration {
  return {
    module: {
      rules: [
        {
          test: /\.svg$/,
          type: 'asset',
          resourceQuery: /image/,
          exclude: [/node_modules/],
          generator: {
            filename: 'assets/[name].[contenthash:6][ext][query]'
          },
          parser: {
            dataUrlCondition: {
              maxSize: 600
            }
          }
        },
        {
          test: /\.svg$/,
          resourceQuery: '',
          use: [
            {
              loader: 'svg-sprite-loader',
              options: {
                extract: true,
                symbolId: (filePath: string) => path.basename(filePath),
                spriteFilename: (svgPath: string) => `sprite${svgPath.slice(-4)}`
              }
            },
            {
              // svg hover会显示title字段 将title标签过滤
              loader: path.resolve(__dirname, '../utils/removeSvgTitle.js')
            }
          ]
        }
      ]
    },
    plugins: [new SpriteLoaderPlugin()]
  }
}

export default svgConfig
