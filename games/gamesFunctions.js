const db = require('../dbConfig.js');

module.exports = {
    insert,
    getAll,
};

async function insert(game){
    const [id] = await db('games').insert(game, 'id');

    return db('games')
        .where({ id })
        .first();
}

async function getAll() {
    return db('games');
}