#!/usr/bin/env node

const program = require('commander')
const { version } = require('../package.json')
const createCommand = require('../packages/create')

createCommand(program)

program
  .version(version)
  .usage('vue-tpl <command> [options]')
  .parse(process.argv)
