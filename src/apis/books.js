import axios from 'axios';

const API_KEY = 'gjN2nyeqHDpkvEEX6IbMw';
const CORS = 'https://cors-anywhere.herokuapp.com/';
const API_URL = 'https://www.goodreads.com';

export default axios.create({
  headers: { 'X-Requested-With': 'XMLHttpRequest' },
  baseURL: CORS + API_URL,
  params: { key: API_KEY }
});