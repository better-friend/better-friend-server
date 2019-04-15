
exports.up = function(knex, Promise) {
  return knex.schema.createTable("dates", function(table) {
    table.increments("date_id");
    table.string("username").notNull();
    table.string("date").notNull();
    table.string("phone_number").notNull();
    table.string("message").notNull();
    table.bool("sent").notNull();
  })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable("dates");
};
