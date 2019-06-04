exports.up = knex => {
    return knex.schema
    .createTable('users', table => {
        table.increments('id').primary();
        table
        .integer('parentId')
        .unsigned()
        .references('id')
        .inTable('users')
        .index();
        table.string('firstName');
        table.string('lastName');
        table.string('email').notNullable();
        table.string('phone', 10).notNullable();
        table.string('password').nullable();
        table.string('profilePic');
        table.enu('role', ['customer', 'admin', 'author']);
        table.timestamps();
    })
    .createTable('customers', table => {
        table.increments('id').primary();
        table
        .integer('userId')
        .unsigned()
        .references('id')
        .inTable('users')
        .index();
    })
    .createTable('authors', table => {
        table.increments('id').primary();
        table
        .integer('userId')
        .unsigned()
        .references('id')
        .inTable('users')
        .index();     
    })
    .createTable('books', table => {
        table.increments('id').primary();
        table
        .integer('authorId')
        .unsigned()
        .references('id')
        .inTable('authors')
        .index();
        table.string('name');
        table.string('publication');
        table.string('status');
    })
    .createTable('customersBook', table => {
        table.increments('id').primary();
        table
        .integer('customerId')
        .unsigned()
        .references('id')
        .inTable('customers')
        .index();
    })
};

exports.down = knex => {
    return knex.schema
    .dropTableIfExists('customersBook')
    .dropTableIfExists('books')
    .dropTableIfExists('authors')
    .dropTableIfExists('customers')
    .dropTableIfExists('users');
}