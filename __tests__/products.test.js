const router = require('../routes/product');
const request = require('supertest');
const app = require('../app');

jest.setTimeout(1000);

describe('products and category routes', () => {
    it('get all products', async () => {
        const res = await request(app).get('/products');
        expect(res.header['Content-Type']).toBe(/json/);
        expect(200);
    });

    it('get category details', async () => {
        const res = await request(app).get('/categories');
        expect(res).status(200);
    });

    it('responds to /categories/:id/products', async () => {
        const res = await request(app).get('/categories/6239f939cea8088ec1317df8/products');
        expect(200);
    });

    // it('add a new product', () => {
    //     const req = { params: { product: product } };
    //     const res = {
    //         text: Object,
    //         send: function (input) { this.text = input }
    //     };
    //     const response = request(app).post('/add-product', res);
    //     console.log(response);
    //     // expect(200);
    // })

});

