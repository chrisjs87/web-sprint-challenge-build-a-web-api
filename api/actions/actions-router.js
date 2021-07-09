// Write your "actions" router here!

const express = require('express')

const Actions = require('./actions-model')

// const { } = require('./actions-middleware')

const router = express.Router()

router.get('/api/actions', (req, res) => {})

router.get('/api/actions/:id', (req, res) => {})

router.post('/api/actions', (req, res) => {})

router.put('/api/actions/:id', (req, res) => {})

router.delete('/api/actions/:id', (req, res) => {})

module.exports = router