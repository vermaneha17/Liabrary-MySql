const { Model } = require('objection');
const knex = require('knex');

const config = require('../knexfile');
const baseObjectionPlugin = require('../helpers/baseObjectionPlugin');

// Initialize knex.
const knex = knex(config[process.env.NODE_ENV]);
// Give the knex object to objection.
Model.knex(knex);

Model = baseObjectionPlugin(Model);

module.exports = Model;
