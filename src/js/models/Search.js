import axios from 'axios';
const DEBUG = true;

export default class Search {
  constructor(query) {
    this.query = query;
  }
  async getResult() {
    let url = 'http://food2fork.com/api/search';
    const key = 'f6644f74e7cb9969a99998d7ae435f84';
    if (DEBUG) {
      let proxy = 'https://cors-anywhere.herokuapp.com/';
      url = proxy + url;
    }
    try {
      const res = await axios(`${url}?key=${key}&q=${this.query}`);
      this.result = res.data.recipes;
      console.log(this.result);
    } catch (error) {
      console.log(error);
    };
  };
}