#!/usr/bin/env node

import { Command } from 'commander'
import chalk from 'chalk'
import pkg from '../package.json'
import reelup from '../lib/reelup'
import type { CliOptions } from '../interface'

const program = new Command()

program.version(`reelup-cli ${pkg.version}`).usage('<command> [options]')

program
  .description('编译资源')
  .option('-f, --config [type]', '指定reelup.config.ts配置文件地址')
  .option('-p, --type [type]', '指定编译类型：node; webjs; react')
  .action((options: CliOptions) => {
    reelup(options || {})
  })

program.on('--help', () => {
  console.log()
  console.log(`  Run ${chalk.cyan(`reelup-cli <command> --help`)} for detailed usage of given command.`)
  console.log()
})

// eslint-disable-next-line no-restricted-syntax
for (const c of program.commands) c.on('--help', () => console.log())

program.parse(process.argv)
