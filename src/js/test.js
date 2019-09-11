require('dotenv').config();
let proxy = process.env.NODE_ENV === 'production' ? '' : process.env.API_PROXY;

console.log(process.env.API_PROXY, process.env.API_KEY, process.env.API_URL);
console.log('Done');