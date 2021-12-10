// build your `/api/tasks` router here
const express = require('express');
const Task = require('./model')
const router = express.Router();

router.get('/', (req,res, next) => {
    Task.getTasks()
    .then (task => {
        res.json(task)
    })
    .catch(next)
})
router.get('/:task_id', (req,res, next) => {

    Task.getTaskById(req.params.task_id)
    .then (task => {
        res.json(task)
    })
    .catch(next)
})

router.post('/', (req, res, next) => {
    Task.createTask(req.body)
        .then(newTask => {
            res.status(201).json(newTask)
        })
        .catch(next)
});

module.exports = router;
