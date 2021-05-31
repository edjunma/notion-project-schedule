const express = require('express')
const getProjects = require('./services/notion')
const PORT = process.env.PORT || 5000

const app = express()

app.use(express.static('public'))

app.get('/projects', async(req, res) => {
  const projects = await getProjects()
  res.json(projects)
})

app.listen(PORT, console.log(`Server started on port ${PORT}`))

