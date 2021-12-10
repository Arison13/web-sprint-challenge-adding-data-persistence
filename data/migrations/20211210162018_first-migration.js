
exports.up = async function(knex) {
  await knex.schema 
    .createTable('projects', table => {
        table.increments("project_id")
        table.string('project_name', 256).notNullable()
        table.string('project_description', 420)
        table.integer("project_completed").notNullable().defaultTo(0)
    })

    .createTable('resources', table => {
        table.increments("resource_id")
        table.string('resource_name', 256).notNullable().unique()
        table.string("resource_description", 128);
    })

    .createTable('tasks', table => {
        table.increments("task_id")
        table.string('task_description', 256).notNullable()
        table.string("task_notes", 128);
        table.integer("task_completed").notNullable().defaultTo(0);
        table.integer("project_id")
        .unsigned()
        .notNullable()
        .references("project_id")
        .inTable("projects")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
    })
    .createTable("project_resources", (table) => {
        table.increments("project_resource_id");
        table.integer("project_id")
          .unsigned()
          .notNullable()
          .references("project_id")
          .inTable("projects")
          .onUpdate("CASCADE")
          .onDelete("CASCADE");
        table.integer("resource_id")
          .unsigned()
          .notNullable()
          .references("resource_id")
          .inTable("resources")
          .onUpdate("CASCADE")
          .onDelete("CASCADE");
      });
};

exports.down = async function(knex) {
    await knex.schema
    .dropTableIfExists('project_resources')
    .dropTableIfExists('tasks')
    .dropTableIfExists('resources')
    .dropTableIfExists('projects')
    
};
