function stripISOTime(dateObj) {
  return dateObj.toISOString().slice(0,10);
}


exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('dates').del()
    .then(function () {
      // Inserts seed entries
      return knex('dates').insert([
        {date_id: 1, 
        user_id: 1,
        username: 'john555',
        date: stripISOTime(new Date()),
        personToSendMessageTo: "Lucy",
        phone_number: "555-555-5555",
        message: "Happy Birthday",
        sent: false},
      ]);
    });
};
