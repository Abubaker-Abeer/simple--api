const request = require('supertest');
const app = require('../index'); 

describe('API Tests', () => {

    it('GET / should return welcome message', async () => {
        const response = await request(app).get('/');
        expect(response.status).toBe(200);
        expect(response.text).toBe('Welcome to the simple API!');
    });

    it('POST /users should add a new user', async () => {
        const newUser = { name: 'Abeer Abubaker', email: 'abeerabubaker2001@gmail.com' };
        const response = await request(app).post('/users').send(newUser);
        expect(response.status).toBe(201);
        expect(response.body).toMatchObject({ name: 'Abeer Abubaker', email: 'abeerabubaker2001@gmail.com' });
        expect(response.body).toHaveProperty('id');
    });

    it('GET /users should return all users', async () => {
        const response = await request(app).get('/users');
        expect(response.status).toBe(200);
        expect(Array.isArray(response.body)).toBe(true);
    });

    it('GET /greet?name=John should return greeting with name', async () => {
        const response = await request(app).get('/greet?name=Abeer Abubaker');
        expect(response.status).toBe(200);
        expect(response.body).toEqual({ greeting: 'Hello, Abeer Abubaker' });
    });

    it('GET /greet should return "Hello, World!" when no name is provided', async () => {
        const response = await request(app).get('/greet');
        expect(response.status).toBe(200);
        expect(response.body).toEqual({ greeting: 'Hello, World!' });
    });

    it('GET /info should return server info', async () => {
        const response = await request(app).get('/info');
        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('time');
        expect(response.body).toHaveProperty('client_address');
        expect(response.body).toHaveProperty('host_name');
        expect(response.body).toHaveProperty('user_count');
    });
});
