// build your `/api/resources` router here
const express = require('express');

const router = express.Router();

router.get('/', (req,res) => {
    res.send("HELLO FROM ROUTER")
})

module.exports = router;
