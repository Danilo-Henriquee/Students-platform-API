"use strict";const bcrypt = require('bcryptjs');

module.exports = {
  up: async (queryInterface) => queryInterface.bulkInsert(
    'users',
    [
      {
        nome: 'Danilo 1',
        email: 'danilo1@gmail.com',
        password_hash: await bcrypt.hash('123456', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nome: 'Danilo 2',
        email: 'danilo2@gmail.com',
        password_hash: await bcrypt.hash('512346', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nome: 'Danilo 3',
        email: 'danilo3@gmail.com',
        password_hash: await bcrypt.hash('9858712', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
    ],
    {},
  ),

  down: async () => {

  },
};
