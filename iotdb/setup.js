'use strict'
const debug = require('debug')('platziIot:iotdb:setup')
const db = require('./')
const inquirer = require('inquirer')
const chalk = require('chalk')

const prompt = inquirer.createPromptModule()

async function setup () {
  const answer = await prompt({
    type: 'confirm',
    name: 'setup',
    message: 'Quiere eliminar la base de datos?'
  })

  if (!answer.setup) {
    return console.log('No se eliminó la base de datos!!')
  }

  const config = {
    database: 'iotapp',
    username: 'postgres',
    password: 'mdark1001',
    host: 'localhost',
    dialect: 'postgres',
    logging: s => debug(s),
    setup: true

  }
  await db(config).catch(handleFatalError)
  console.log('Todo bien--->>')
  process.exit(0)
}
function handleFatalError (err) {
  console.error(`${chalk.red('[FALTAL ERROR]')} ${err.message}`)
  console.error(err.stack)
  process.exit(1)
}

setup()
