'use strict';

const express = require('express');
const app = express();
const notFoundHandler = require('./error-handlers/404');
const errorHandler = require('./error-handlers/500');


app.get('/', (req, res) => {
    res.status(200).send('Hello from Backend');
});

app.get('/bad', (req, res) => {
    throw new Error('Something went wrong');
});

app.use('*', notFoundHandler);
app.use(errorHandler);

function start(port) {
    app.listen(port, () => console.log(`Listening on ${port}`))
};

module.exports = {
    app: app,
    start: start
};