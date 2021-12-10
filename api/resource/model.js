// build your `Resource` model here
const db = require('../../data/dbConfig');

function getAll() {
    return db("resources")
    .select('*')
}

function getById(resource_id) {
    return db("resources")
    .select('*')
    .where('resource_id', resource_id)
    .first()
}
async function createResource(newResource) {
    const newId = await db("resources").insert(newResource);
  
    return getById(newId);
}

module.exports = {
    getAll,
    getById,
    createResource
}