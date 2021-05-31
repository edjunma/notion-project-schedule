const projectsEl = document.querySelector('#projects');
const loadingEl = document.querySelector('#loading');
let loading = false;

const getProjectsFromBackend = async () => {
  loading = true;
  const res = await fetch('https://localhost:5000/projects');
  const data = await res.json();
  loading = false;
  return data;
}

const addProjectsToDom = async () => {
  const projects = await getProjectsFromBackend()
  
  if (!loading) {
    loadingEl.innerHTML = ''
  }

  projects.forEach(project => {
    const div = document.createElement('div');
    div.className = 'project'
    div.innerHTML = `
      <h3>${project.title}</h3>
      <ul>
        <li><strong>Release Date: </strong> ${project.date}</li>
        <li><strong>Description: </strong> ${project.description}</li>
      </ul>
      <div class="tags">${project.tags}</div>
      `
      projectsEl.appendChild(div);
  })
}

addVideosToDom();