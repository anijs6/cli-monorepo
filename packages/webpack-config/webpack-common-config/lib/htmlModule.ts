import HtmlWebpackPlugin from 'html-webpack-plugin'
import { getEntryFile } from '@anijs/cli-shared-utils'
import type { CommonConfigOptions } from '../webpack.interface'

/**
 * 处理html资源
 *
 * @param options 配置数据
 */
function theHtml(options: CommonConfigOptions) {
  const htmlFile =
    options.htmlFile ||
    getEntryFile({
      entryFileExtensions: ['.html', '.ejs', '.pug']
    })
  return {
    plugins: [new HtmlWebpackPlugin({})]
  }
}
