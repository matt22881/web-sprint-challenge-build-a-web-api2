const express = require('express');
const server = express();

// Configure your server here
// Build your actions router in /api/actions/actions-router.js
// Build your projects router in /api/projects/projects-router.js
// Do NOT `server.listen()` inside this file!
const morgan = require('morgan')
const errorHandler = require('./middleware/errorHandler')
const actionsRouter = require('./actions/actions-router')
const projectsRouter = require('./projects/projects-router')

server.use(express.json())
server.use(morgan('dev'))
server.use('/api/projects', projectsRouter)
server.use('/api/actions', actionsRouter)

server.get('*', (req, res) => {
    res.send('<h1>Welcome to the API Server</h1><p>no page here, try again</p>')
})

server.use(errorHandler)

module.exports = server;
