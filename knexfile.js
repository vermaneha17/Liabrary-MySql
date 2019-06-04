// Update with your config settings.

module.exports = {

  development: {
    client: 'mysql2',
    connection: {
      user: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
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