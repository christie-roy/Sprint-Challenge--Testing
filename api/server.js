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
});

server.post('/games', async (req, res) => {
    const { title, genre } = req.body;
    if (!title || !genre){
        return res.status(422).json({ message: 'Title or genre missing '});
    }
    try {
        const addGame = await games.insert(req.body);
        res.status(201).json(addGame);
    } catch(error) {
        res.status(500).json(error);
    }
})

module.exports = server;