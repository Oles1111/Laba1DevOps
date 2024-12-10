import request from 'supertest';
import { expect } from 'chai';
import app from '../app.js';

describe('GET /hello', () => {
    it('should return Hello, World!', async () => {
        const res = await request(app).get('/hello');
        expect(res.status).to.equal(200);
        expect(res.body).to.deep.equal({ message: 'Hello, World!' });
    });
});
