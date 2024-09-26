// add middlewares here related to actions

const Actions = require('./actions-model')

function validateActionId(req, res, next) {
  const { id } = req.params
  Actions.get(id)
    .then(action => {
      if(action) {
        req.action = action
        next()
      } else {
        res.status(404).json({ message: `Could not find action with id ${id}`})
        next()
      }
    })
}

function validateActionBody(req, res, next) {
  const { notes, description } = req.body
  if(!notes || !description) {
    res.status(400).json({ message: 'Missing required notes or description field' })
  } else {
    req.notes = notes
    req.description = description
    next()
  }
}


module.exports = {
  validateActionId,
  validateActionBody
}