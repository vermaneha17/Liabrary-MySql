module.exports = function baseObjectionPlugin(Model) {
    // The returned class should have no name.
    return class extends Model {
        // Your modifications.
        $beforeInsert(context) {
            const parent = super.$beforeInsert(context);

            return Promise.resolve(parent).then(() => {
                const timestamp = new Date();
                this.created_at = timestamp;
                this.updated_at = timestamp;
            });
        }

        $beforeUpdate(context) {
            const parent = super.$beforeUpdate(context);
            return Promise.resolve(parent).then(() => {
                this.updated_at = new Date();
            });
        }
    }
};