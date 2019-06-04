const Model = require('./Model');

class User extends Model {
    static get tableName() {
        return 'users';
    }

    static get modifiers() {
        return {
            showSpecificData: builder => builder.select('id', 'firstName', 'lastName', 'email', 'role')
        };
    }

    static get relationMappings() {
        return {
            customer: {
                relation: Model.HasOneRelation,
                modelClass: `${__dirname}/Customer`,
                join: {
                    from: 'users.id',
                    to: 'customers.userId'
                }
            },
            author: {
                relation: Model.HasOneRelation,
                modelClass: `${__dirname}/Author`,
                join: {
                    from: 'user.id',
                    to: 'authors.userId'
                }
            }
        };
    }
}

module.exports = User;