// Write your "actions" router here!

const express = require('express')

const Actions = require('./actions-model')

const { validateActionId, validateActionBody } = require('./actions-middlware')

const router = express.Router()

router.get('/', (req, res) => {
  Actions.get()
    .then(actions => {
      res.status(200).json(actions)
    })
})

router.get('/:id', validateActionId, (req, res) => {
  res.status(200).json(req.action)
})

router.post('/', validateActionBody, (req, res) => {
  Actions.insert(req.body)
    .then(action => {
      res.status(201).json(action)
    })
})

router.put('/:id', validateActionId, validateActionBody, (req, res) => {
  Actions.update(req.params.id, req.body)
    .then(action => {
      res.json(action)
    })
})

router.delete('/:id', validateActionId, (req, res) => {
  Actions.remove(req.params.id)
    .then(() => {
      res.status(200).json(req.action)
    })
})

module.exports = router