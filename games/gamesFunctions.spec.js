const db = require('../dbConfig.js');
const Games = require('./gamesFunctions');

describe('games model', () => {
    describe('insert()', () => {
        afterEach(async () => {
            await db('games').truncate();
        });

        it('should insert games into the db', async () => {
            await Games.insert({ title: 'Sonic', genre: 'Retro', releaseYear: 1980});

            const games = await db('games');
            expect(games).toHaveLength(1);
        });

        it('should insert a single game into the db', async () => {
            let game = await Games.insert({ title: 'Sonic', genre: 'Retro', releaseYear: 1980});
            expect(game.title).toBe('Sonic');
        })
    })
})