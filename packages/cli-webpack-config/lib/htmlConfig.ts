import HtmlWebpackPlugin from 'html-webpack-plugin'
import { getEntryFile } from '@anijs/cli-shared-utils'
import type { Configuration } from 'webpack'
import type { CommonConfigOptions } from '../webpack.interface'

/**
 * 处理html资源
 *
 * @param options 配置数据
 * @returns html资源相关的webpack配置
 */
function htmlConfig(options: CommonConfigOptions): Configuration {
  const htmlFile =
    options.htmlFile ||
    getEntryFile({
      entryFileExtensions: ['.html', '.ejs']
    })

  const { mode } = options || {}
  const isProduction = mode === 'production'

  const isEjs = /\.ejs$/.test(htmlFile)
  return {
    plugins: [
      new HtmlWebpackPlugin({
        template: isEjs ? `!!ejs-webpack-loader!${htmlFile}` : htmlFile,
        filename: 'index.html',
        minify: isProduction
          ? {
              removeComments: true,
              collapseWhitespace: true,
              removeRedundantAttributes: true,
              useShortDoctype: true,
              removeEmptyAttributes: true,
              removeStyleLinkTypeAttributes: true,
              keepClosingSlash: true,
              minifyJS: true,
              minifyCSS: true,
              minifyURLs: true
            }
          : {},
        inject: 'body',
        showErrors: !isProduction
      })
    ]
  }
}

export default htmlConfig
