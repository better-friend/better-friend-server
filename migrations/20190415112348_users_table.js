
exports.up = function(knex, Promise) {
    return knex.schema.createTable("users", function(table) {
        table.increments("user_id");
        table.string("username");
        table.unique("username");
        table.string("password").notNull();
      })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable("dates");
};
