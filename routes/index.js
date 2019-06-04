const express = require('express');

const userController = require('../controlllers/users');

const router = express.Router();

router.get('/', (req, res, next) => {
    res.json({ message: `Welcome to ${process.env.APP_NAME}` });
});

router.post('/login', userController.login);

module.exports = router;