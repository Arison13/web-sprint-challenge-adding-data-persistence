// build your `Project` model here
const db = require('../../data/dbConfig')

module.exports = {
    getProjects,
    getProjectById,
    createProject
}

async function getProjects() {
    const rawData = await db('projects').select('*') 
    
    const clientData = rawData.map(project => {
        if(!project.project_completed){
            return {
                ...project,
                project_completed: false
            }
        }else {
            return {
                ...project,
                project_completed: true,
            }
        }
    })
    return clientData
}

async function getProjectById(project_id) {
    const rawData  = await db('projects')
        .select("*")
        .where('project_id', project_id)
        .first()
        if(!rawData.project_completed) {
            return {
                ...rawData,
                project_completed:false
            }
        }else {
            return{
                ...rawData,
                project_completed: true
            }
        }
}

async function createProject(newProject) {
    const newId = await db("projects").insert(newProject);
  
    const getNewProject = await getProjectById(newId);
  
    const addBool = !getNewProject.project_completed
      ? { ...getNewProject, project_completed: false }
      : { ...getNewProject, project_completed: true };
  
    return addBool;
  }
