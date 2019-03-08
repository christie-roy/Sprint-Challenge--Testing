const express = require('express');

const games = require('../games/gamesFunctions');

const server = express();

server.use(express.json());

server.get('/', async (req, res) => {
    res.status(200).json({ msg: 'Running!'});
});

server.get('/games', async (req, res) => {
    const arcadeList = await games.getAll()
    res.status(200).json(arcadeList);
})

module.exports = server;