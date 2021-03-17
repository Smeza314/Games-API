const router = require('express').Router()
const { Game } = require('../models')

// GET all Games
router.get('/games', (req, res) => {
  Game.findAll({})
    .then(games => res.json(games))
    .catch(err => console.log(err))
})

// GET one Game
router.get('/games/:id', (req, res) => {
  Game.findOne({ where: { id: req.params.id } })
    .then(game => res.json(game))
    .catch(err => console.log(err))
})

// POST one Song
router.post('/games', (req, res) => {
  Game.create(req.body)
    .then(game => res.json(game))
    .catch(err => console.log(err))
})

// PUT one Game
router.put('/games/:id', (req, res) => {
  Game.update(req.body, { where: { id: req.params.id } })
    .then(() => res.sendStatus(200))
    .catch(err => console.log(err))
})

// DELETE one Game
router.delete('/games/:id', (req, res) => {
  Game.destroy({ where: { id: req.params.id } })
    .then(() => res.sendStatus(200))
    .catch(err => console.log(err))
})

module.exports = router