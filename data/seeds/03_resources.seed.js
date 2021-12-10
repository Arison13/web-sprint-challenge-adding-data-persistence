const resources = [
    { resource_name: "money" },
    {
      resource_name: "dirt",
      resource_description: "i believe it is called soil",
    },
    { resource_name: "eggs" },
    { resource_name: "bone broth", resource_description: "for those hard days" },
  ];
  
  exports.seed = function (knex) {
    return knex("resources").insert(resources);
  };
  