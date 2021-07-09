// Write your "projects" router here!

const express = require('express')

const Projects = require('./projects-model')

const { validateProjectId, validateProjectBody } = require('./projects-middleware')

const router = express.Router()

router.get('/', (req, res) => {
  Projects.get()
    .then(projects => {
      res.status(200).json(projects)
    })
})

router.get('/:id', validateProjectId, (req, res) => {
  res.status(200).json(req.project)
})

router.post('/', validateProjectBody, (req, res) => {
  Projects.insert(req.body)
    .then(project => {
      res.status(201).json(project)
    })
})

router.put('/:id', (req, res) => {})

router.delete('/:id', (req, res) => {})

router.get('/:id/actions', (req, res) => {})

module.exports = router