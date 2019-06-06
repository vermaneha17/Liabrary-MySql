// Update with your config settings.

module.exports = {

  development: {
    client: 'mysql2',
    connection: {
      user: 'root',
      password: '',
      database: 'liabrary',
      host: '127.0.0.1',
      port: '3306'
  },
  pool: {
    min: 2,
    max: 10
  },
  migrations: {
    tableName: 'migrations',
    directory: './db/migrations'
  },
  seeds: {
    directory: './db/seeders'
  }
}};