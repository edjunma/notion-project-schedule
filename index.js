const getProjects = require('./services/notion')

;(async () => {
  const nProjects = await getProjects()
  console.log(nProjects)
})()