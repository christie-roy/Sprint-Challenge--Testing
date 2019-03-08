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
        it('should return 200', () => {
            return request(server)
                .get('/games')
                .then(res => {
                    expect(res.status).toBe(200);
                });
        });
    })
});