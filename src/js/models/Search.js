import axios from 'axios';
// require('dotenv').config();
let proxy = process.env.NODE_ENV === 'development' ? process.env.API_PROXY : '';

export default class Search {
  constructor(query) {
    this.query = query;
  }
  async getResult() {
    try {
      const res = await axios(`${proxy+process.env.API_URL}?key=${process.env.API_KEY}&q=${this.query}`);
      this.result = res.data.recipes;
      console.log(this.result);
    } catch (error) {
      console.log(error);
    };
  };
}