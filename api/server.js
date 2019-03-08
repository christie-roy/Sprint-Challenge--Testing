const express = require('express');

// const games = require('');

const server = express();

server.use(express.json());

server.get('/', async (req, res) => {
    res.status(200).json({ msg: 'Running!'});
});

module.exports = server;