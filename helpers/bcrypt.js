const bcrypt = require('bcryptjs');

const salt = bcrypt.genSaltSync(parseInt(process.env.PASSWORD_SALT_ROUNDS));

module.exports = {
    hash: password => {
        if (!password || String(password).trim() === '')
            throw new Error('Password cannot be null.');
        return bcrypt.hashSync(password, salt);
    },
    compare: (password, hash) => {
        return bcrypt.compareSync(password, hash);
    }
};