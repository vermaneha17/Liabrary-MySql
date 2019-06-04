const Model = require('./Model');

class Author extends Model {
    static get tableName() {
        return 'authors';
    }

    static get relationMappings() {
        return {
            user: {
                relation: Model.BelongsToOneRelation,
                modelClass: `${__dirname}/User`,
                join:{
                    from: 'authors.userId',
                    to: 'users.id'
                }
            },
            books :{
                relation: Model.HasManyRelation,
                modelClass: `${__dirname}/Book`,
                join:{
                    from: 'authors.userId',
                    to: 'books.id'
                }
            }
        }
    };
}

module.exports = Author;