
exports.up = function (knex, Promise) {
    return knex.schema.createTable('users', table => {
        table.uuid('id').primary();
        table.string('fullName');
        table.string('email').notNullable();
        table.string('password').nullable();
        table.string('profilePic');
        table.enu('role', ['citizen', 'admin']);
        table.timestamps();
    })
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('users');
};
