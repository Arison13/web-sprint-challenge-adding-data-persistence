// build your `/api/resources` router here
const express = require('express');
const Resources = require('./model')

const router = express.Router();

// [GET] /api/resources
router.get('/', async (req,res, next) => {
    const data = await  Resources.getAll()
    try {
        res.json(data)
    }
    catch (err){
        next(err)
    }
})

//[GET] /api/resources/:resource_id
router.get("/:resource_id", (req, res, next) => {
    Resources.getResourceById(req.params.resource_id)
      .then((resource) => {
        res.json(resource);
      })
      .catch(next);
});

// [POST] /api/resources
router.post("/", (req, res, next) => {
    Resources.createResource(req.body)
      .then((newResource) => {
        res.status(201).json(newResource);
      })
      .catch(next);
  });

module.exports = router;
