const express = require('express')
const authApp = express()
const usersApp = express()
const containersApp = express()

// auth app
const authRouter = require('./routes/auth')
authApp.use('/api/v1/auth', authRouter)
authApp.listen(5000, () => console.log('Auth app started'))

// user app
const userRouter = require('./routes/users')
usersApp.use('/api/v1/users', userRouter)
usersApp.listen(5001, () => console.log('Users app started'))

// containers app
const containersRouter = require('./routes/containers')
containersApp.use('/api/v1/containers', containersRouter)
containersApp.listen(5002, () => console.log('Containers app started'))
