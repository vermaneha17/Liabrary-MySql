const express = require('express');

const routes  = require('./routes')
global.messages = require('./config/messages');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json())
app.use('/',routes);

app.listen(port, () => {
    console.log(`Server is up on port ${port}`);
})