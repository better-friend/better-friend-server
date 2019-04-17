
const bcrypt = require("bcryptjs");

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {user_id: 1, username: 'john555', password:  bcrypt.hashSync("fun123",12)},
        {user_id: 2, username: 'jess555', password:  bcrypt.hashSync("fun123",12)},
        {user_id: 3, username: 'randomperson111', password: bcrypt.hashSync("fun123",12)}
      ]);
    });
};
