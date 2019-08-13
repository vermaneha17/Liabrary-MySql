const uuid = require('uuid/v4');
const bcrypt = require('../../helpers/bcrypt');

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          id: uuid(),
          fullName:'Admin',
          email:'admin@gmail.com',
          password:bcrypt.hash('admin123'),
          role:'admin'
        }
      ]);
    });
};
