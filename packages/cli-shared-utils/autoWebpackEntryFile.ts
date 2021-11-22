/* eslint-disable no-restricted-syntax */
import fsExtra from 'fs-extra'
import path from 'path'

const defaultEntryDirectorys = ['src', '']
const defaultEntryFileNames = ['index', 'main', 'app']
const defaultEntryFileExtensions = ['.ts', '.tsx', '.js', '.jsx']

/**
 * 获取项目入口文件
 *
 * @param options 执行查找文件的配置项
 * @returns webpack entry 文件
 */
function getEntryFile(options?: EntryFileOptions): string {
  const {
    context = process.cwd(),
    entryDirectorys = defaultEntryDirectorys,
    entryFileNames = defaultEntryFileNames,
    entryFileExtensions = defaultEntryFileExtensions
  } = options || {}

  const entryFiles = combineArray(entryDirectorys, entryFileNames, entryFileExtensions)
  const entryFile = entryFiles.find(file => fsExtra.pathExistsSync(path.resolve(context, file)))
  return entryFile || ''
}

/**
 * 排列组合
 *
 * @param arrays 接收各个数组的数据
 * @returns 组合过后的数组数据
 */
function combineArray(...arrays: Array<Array<string>>): Array<string> {
  const results: Array<string> = []
  const result: Array<string> = []
  /**
   * @param arr 需要组合的二维数组数据
   * @param index 当前组合的数组下标
   */
  function doExchange(arr: Array<Array<string>>, index: number) {
    for (let i = 0; i < arr[index].length; i++) {
      result[index] = arr[index][i]
      if (index !== arr.length - 1) {
        doExchange(arr, index + 1)
      } else {
        results.push(jointPath(result))
      }
    }
  }
  doExchange(arrays, 0)
  return results
}

/**
 * 拼接文件路径
 *
 * @param itemList 每一项
 * @returns 文件路径
 */
function jointPath(itemList: Array<string>): string {
  return itemList.reduce((preValue, item) => {
    if (item === '') return preValue
    if (/^\./.test(item)) return preValue + item
    if (preValue !== '') return `${preValue}/${item}`
    return preValue
  }, '')
}

interface EntryFileOptions {
  /**
   * 执行查找的上下文
   *
   * @default process.cwd()
   */
  context?: string
  /**
   * 执行查找的目录
   *
   * @default entryDirectorys
   */
  entryDirectorys: Array<string>
  /**
   * 执行查找的文件名字
   *
   * @default ['index', 'main', 'app']
   */
  entryFileNames: Array<string>
  /**
   * 执行查找的文件后缀名
   *
   * @default ['.ts', '.tsx', '.js', 'jsx']
   */
  entryFileExtensions: Array<`.${string}`>
}

export default getEntryFile
