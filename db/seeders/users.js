const bcrypt = require('../../helpers/bcrypt');

exports.seed = knex => {
    //delete extisting entries
    return knex('users').del()
      .then(() => { 
          return knex('users').insert({
          id: uuidv4(),
          firstName: 'Neha',
          lastName: 'Verma',
          email: 'admin@gmail.com',
          phone: '1234567890',
          password: bcrypt.hash('admin123'),
          role: 'admin',
          created_at: new Date(),
          Updated_at: new Date()
        })
    })
};