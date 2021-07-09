// Write your "projects" router here!

const express = require('express')

const Projects = require('./projects-model')

const { validateProjectId, validateProjectBody, validateProjectCompleted } = require('./projects-middleware')

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

router.put('/:id', validateProjectId, validateProjectBody, validateProjectCompleted, (req, res) => {
  Projects.update(req.params.id, req.body)
    .then(project => {
      res.json(project)
    })
})

router.delete('/:id', validateProjectId, (req, res) => {
  Projects.remove(req.params.id)
    .then(() => {
      res.status(200).json(req.user)
    })
})

router.get('/:id/actions', (req, res) => {
  Projects.getProjectActions(req.params.id)
    .then(actions => {
      res.status(200).json(actions)
    })
})

module.exports = router