'use strict'
const Sequelize = require('sequelize')
const setupdatabase = require('../lib/db')

module.exports = function setupAgentModel (config) {
  const sequelize = setupdatabase(config)
  return sequelize.define('agent', {
    uid: {
      type: Sequelize.STRING,
      allowNull: false
    },
    username: {
      type: Sequelize.STRING,
      allowNull: false
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    hostname: {
      type: Sequelize.STRING,
      allowNull: false
    },
    pid: {
      type: Sequelize.STRING,
      allowNull: false
    },
    connected: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: false
    }

  })
}
