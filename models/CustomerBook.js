const Model = require('./Model');

class CustomerBook extends Model {
    static get tableName() {
        return 'customersBook';
    }

    static get relationMappings() {
        return {
            customers: {
                relation: Model.BelongsToOneRelation,
                modelClass: `${__dirname}/Customer`,
                join: {
                    from: 'customersBook.customerId',
                    to: 'customers.userId'
                }
            }
        }
    }
}

module.exports = CustomerBook;