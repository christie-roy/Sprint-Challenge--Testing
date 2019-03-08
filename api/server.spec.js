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

    describe('/games', () => {
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
});