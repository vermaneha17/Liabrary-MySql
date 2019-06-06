const bcrypt = require('../../helpers/bcrypt');

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, firstName:'Neha', lastName:'Verma',email:'admin@gmail.com',password:bcrypt.hash('admin123'),role:'admin'}
      ]);
    });
};
