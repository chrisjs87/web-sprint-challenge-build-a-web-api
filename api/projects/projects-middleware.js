// add middlewares here related to projects

const Projects = require('./projects-model')

function validateProjectId(req, res, next) {
  const { id } = req.params
  Projects.get(id)
    .then(project => {
      if(project) {
        req.project = project
        next()
      } else {
        res.status(404).json({ message: `Could not find project with id ${id}`})
        next()
      }
    })
}

function validateProjectBody(req, res, next) {
  const { name, description } = req.body 
  if(!name || !description) {
    res.status(400).json({ message: 'Missing required name or description field' })
  } else {
    req.name = name
    req.description = description
    next()
  }
}

function validateProjectCompleted(req, res, next) {
  const { completed } = req.params
  if ( completed === undefined ) {
    res.status(400).json({ message: "Request body is missing the completed field"} )
  } else {
    req.completed = completed
    console.log("should move to update table")
    next()
  }
}

module.exports = {
  validateProjectId,
  validateProjectBody,
  validateProjectCompleted,
}