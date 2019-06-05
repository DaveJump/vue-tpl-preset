const execa = require('execa')
const chalk = require('chalk')

async function create (pname, options) {
  const preseturl = `direct:https://github.com/DaveJump/vue-tpl-preset.git`
  try {
    await execa(
      'vue',
      [
        'create',
        '--preset',
        preseturl,
        '--clone',
        pname
      ],
      {
        stdio: 'inherit'
      }
    )
    // console.log(chalk.green('🤓 template created successully!'))
  } catch (err) {
    console.log(chalk.red(err))
  }
}

const createCommand = program => {
  program
    .command('create <pname>')
    .action((pname, options) => {
      create(pname, options)
    })
}

module.exports = createCommand
