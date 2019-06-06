const express = require('express');
require('dotenv').config();

const routes = require('./routes')
global.messages = require('./config/messages');
const responseHandler = require('./middlewares/responseHandler');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(responseHandler);
app.use('/',routes);

app.listen(port, () => {
    console.log(`Server is up on port ${port}`);
})