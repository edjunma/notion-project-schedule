const express = require('express')
const getProjects = require('./services/notion')
const PORT = process.env.PORT || 5000

const app = express()

app.listen(PORT, console.log(`Server started on port ${PORT}`))

