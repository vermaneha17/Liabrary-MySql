let { Model } = require('objection');
let knex = require('knex');

const config = require('../knexfile');
const baseObjectionPlugin = require('../helpers/baseObjectionPlugin');

const env = process.env.NODE_ENV || 'development';
// Initialize knex.
knex = knex(config[env]);
// Give the knex object to objection.
Model.knex(knex);

Model = baseObjectionPlugin(Model);

module.exports = Model;
