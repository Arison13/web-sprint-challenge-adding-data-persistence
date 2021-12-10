// build your `Task` model here
const db = require('../../data/dbConfig')

module.exports = {
    getTasks,
    getTaskById,
    createTask
}

async function getTasks(){
    const rawData = await db('tasks')
    .leftJoin('projects', 'projects.project_id','tasks.project_id')
    .select('tasks.*', 'projects.project_name','projects.project_description')
    
    const clientData = rawData.map(task => {
        if(!task.task_completed){
            return {
                ...task,
                task_completed: false
            }
        }else {
            return {
                ...task,
                task_completed: true,
            }
        }
    })
    return clientData 
} 

async function getTaskById(task_id){
    const rawData = await db('tasks')
    .leftJoin('projects', 'projects.project_id','tasks.project_id')
    .select('tasks.*', 'projects.project_name','projects.project_description')
    .where('task_id', task_id)
    .first()

     const clientData = !rawData
        ? { ...rawData, task_completed: false}
        : { ...rawData, task_completed: true }
    return clientData 
} 

async function createTask(newTask){
    const newId = await db('tasks').insert(newTask);
    const createdTask = await db('tasks').select('*').where('task_id', newId).first()

    const clientData = !createdTask.task_completed
        ? { ...createdTask, task_completed: false }
        : { ...createdTask, task_completed: true}

    return clientData;
}