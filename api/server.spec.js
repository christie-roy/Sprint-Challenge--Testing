const request = require('supertest');

const server = require('./server.js');

describe('server.js', () => {
    it('should run initial route', () => {
        return request(server)
            .get('/')
            .then(res => {
                expect(res.status).toBe(200);
            });
    });

    describe('GET /games', () => {
        // test for http status code
        it('should return 200', () => {
            return request(server)
                .get('/games')
                .then(res => {
                    expect(res.status).toBe(200);
                });
        });

        // test for format of data
        it('should return JSON', async () => {
            const res = await request(server).get('/games');
            expect(res.type).toBe('application/json');
        });

        // test for shape of res.body
        it('should return array of games', async () => {
            const res = await request(server).get('/games');
            expect(res.body).toEqual([]);
        });
    });

    describe('POST /games', () => {
        // test for status code
        it('should return 201', async () => {
            const body = {
                title: 'Joshua',
                genre: 'Puzzle solving',
                releaseYear: 1998,
            };
            const res = await request(server).post('/games').send(body);
            expect(res.status).toBe(201);
        });

        it('should return 422 for missing data', async () => {
            const body = {
                title: 'Nonexistent'
            };
            const res = await request(server).post('/games');
            expect(res.status).toBe(422);

        });

        //
    })
});