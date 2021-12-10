const projects = [
    {
      project_name: "My first project",
      project_description: "TRYING TO CODE",
      project_completed: 0,
    },
    {
      project_name: "Second project",
      project_description: "MIGHT DO SOMETHING",
      project_completed: 0,
    },
    { project_name: "Third Project",
     project_description: "NOTHING IMPORTANT", 
     project_completed: 1 },
     
  ];
  
  exports.seed = function (knex) {
    return knex("projects").insert(projects);
  };