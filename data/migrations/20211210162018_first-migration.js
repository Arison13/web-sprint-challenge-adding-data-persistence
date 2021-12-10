
exports.up = async function(knex) {
  await knex.schema 
    .createTable('projects', table => {
        table.increments("project_id")
    })
    .createTable('resources', table => {
        table.increments("resource_id")

    })
    .createTable('tasks', table => {
        table.increments("task_id")
    })
};

exports.down = async function(knex) {
    await knex.schema
    .dropTableIfExists('projects')
    .dropTableIfExists('resources')
    .dropTableIfExists('tasks')
    
};
