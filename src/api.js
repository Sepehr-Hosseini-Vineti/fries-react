import axios from 'axios';

const API_URL = 'http://localhost:3030';

const client = axios.create({ baseURL: API_URL });

export default client;

// GET

export const fetchProducts = () => client.get(`/api/products`);

export const fetchCategories = () => client.get(`/api/categories`);
