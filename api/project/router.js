// build your `/api/projects` router here
const express = require('express');
const Projects = require('./model')
const router = express.Router();

router.get('/', async (req,res, next) => {
    const data = await Projects.getProjects()
    try {
        res.json(data)
    }
    catch (err) {
        next(err)
    }
})

router.get('/:project_id', (req,res, next) => {
    Projects.getProjectById(req.params.project_id)
    .then ( project => {
        res.json(project)
    })
    .catch(next) 
})

router.post("/", (req, res, next) => {
    Projects.createProject(req.body)
      .then(newProject => {
        res.status(201).json(newProject);
      })
      .catch(next);
  });


module.exports = router;
