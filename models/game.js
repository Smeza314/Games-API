const { Model, DataTypes } = require('sequelize')
const sequelize = require('../db')

class Game extends Model { }

Game.init({
  title: DataTypes.STRING,
  developer: DataTypes.STRING,
  genre: DataTypes.STRING
}, { sequelize, modelName: 'games' })

module.exports = Game