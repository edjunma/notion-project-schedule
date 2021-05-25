const express = require('express')
const getProjects = require('./services/notion')
const PORT = process.env.PORT || 5000

const app = express()

app.get('/projects', async(req, res) => {
  const videos = await getVideos()
  res.json(videos)
})

app.listen(PORT, console.log(`Server started on port ${PORT}`))

