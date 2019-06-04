const Model = require('./Model');

class Customer extends Model {
    static get tableName() {
        return 'customers';
    }

    static get relationMappings() {
        return {
            user: {
                relation: Model.BelongsToOneRelation,
                modelClass: `${__dirname}/User`,
                join:{
                    from: 'customers.userId',
                    to: 'users.id'
                }
            },
            customersBooks :{
                relation: Model.HasManyRelation,
                modelClass: `${__dirname}/CustomerBook`,
                join:{
                    from: 'customers.userId',
                    to: 'customersBook.id'
                }
            }
        }
    };
}

module.exports = Customer;