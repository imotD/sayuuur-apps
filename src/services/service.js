import axios from 'axios';

const apiKey = axios.create({
  baseURL: 'http://localhost:8081',
  timeout: 1000,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
});

export default {
  getProducts() {
    return apiKey.get('/products');
  },
  getProductBest() {
    return apiKey.get('/best-products');
  },
  getProductSearch(search) {
    return apiKey.get('/products?q=' + search);
  },
  getProductDetail(id) {
    return apiKey.get('/products/' + id);
  },
  getCart() {
    return apiKey.get('/keranjangs');
  },
  postCart(data) {
    return apiKey.post('/keranjangs', data);
  },
  delCart(id) {
    return apiKey.delete('/keranjangs/' + id);
  },
  postDelivery(data) {
    return apiKey.post('/pesanans', data);
  }
};
