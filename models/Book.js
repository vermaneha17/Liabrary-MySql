const Model = require('./Model');

class Book extends Model {
    static get tableName() {
        return 'books';
    }

    static get relationMappings() {
        return {
            authors: {
                relation: Model.BelongsToOneRelation,
                modelClass: `${__dirname}/Author`,
                join: {
                    from: 'books.authorId',
                    to: 'authors.userId'
                }
            }
        }
    }
}

module.exports = Book;