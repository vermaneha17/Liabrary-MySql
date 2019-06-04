const Model = require('./Model');

class Oauth extends Model {
    static get tableName() {
        return 'basicauth';
    }
}

module.exports = Oauth;
