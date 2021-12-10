const tasks = [
    {
      task_description: "Doing a task",
      task_notes: "notes to do a task",
      task_completed: 0,
      project_id: 1,
    },
    {
      task_description: "Two tasks one stone",
      task_notes: "trying to get this coding thing",
      task_completed: 1,
      project_id: 1,
    },
    {
      task_description: "getting it done",
      task_notes: "nah not really",
      task_completed: 0,
      project_id: 2,
    },
  ];
  
  exports.seed = function (knex) {
    return knex("tasks").insert(tasks);
  };