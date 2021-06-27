'use strict';

const supertest = require("supertest");
const server = require("../server");
const request = supertest(server.app);


describe('API Server', () => {
    it('Handles correct requests', async () => {
        const response = await request.get('/');
        expect(response.status).toEqual(200);
    });
    it('Handles errors', async () => {
        const response = await request.get('/bad');
        expect(response.status).toEqual(500);
    });
    it('Handles invalid requests', async () => {
        const response = await request.get('/haneen');
        expect(response.status).toEqual(404);
    });
});