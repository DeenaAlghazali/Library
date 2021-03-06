const express = require('express');
const path = require('path');
const router = require('./router/router');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(router);

module.exports = app;
