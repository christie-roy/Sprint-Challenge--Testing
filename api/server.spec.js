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
});