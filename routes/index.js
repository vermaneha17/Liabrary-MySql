const express = require('express');

const userController = require('../controlllers/users');

const router = express.Router();

router.get('/', (req, res, next) => {
    res.send(`Welcome To InBook`);
});

router.post('/login', userController.login);

module.exports = router;