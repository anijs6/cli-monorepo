#!/usr/bin/env node

import { Command } from 'commander'
import chalk from 'chalk'
import pkg from '../package.json'
import Serve from '../lib/Serve'
import { ServeOptions } from '../cli.interface'

const program = new Command()

program.version(`pmy-cli ${pkg.version}`).usage('<command> [options]')

program
  .command('serve')
  .description('启动本地服务')
  .option('-f, --config [type]', '指定自定义webpack配置文件')
  .option('-p, --port [type]', '设置server启动端口')
  .action((options: ServeOptions) => {
    new Serve(options)
  })

program.arguments('<command>').action(cmd => {
  program.outputHelp()
  console.log(`  ${chalk.red(`Unknown command ${chalk.yellow(cmd)}.`)}`)
  console.log()
})

program.on('--help', () => {
  console.log()
  console.log(`  Run ${chalk.cyan(`pmy-cli <command> --help`)} for detailed usage of given command.`)
  console.log()
})

// eslint-disable-next-line no-restricted-syntax
for (const c of program.commands) c.on('--help', () => console.log())

program.parse(process.argv)
