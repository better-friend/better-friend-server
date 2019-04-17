const knex = require("knex");
const knexConfig = require("../knexfile.js");

/// make a note to review
const config = process.env.NODE_ENV === `production` ? knexConfig.production : knexConfig.development;

module.exports = knex(config);