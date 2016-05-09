import axios from 'axios';

export default class NomadListApi {
  constructor() {
    this.domain = 'https://nomadlist.com';
    this.baseUrl = `${this.domain}/api/v2`;
    this.paths = [
      // city
      '/city.json',
      // cities
      '/list/cities',
      // countries
      '/list/countries',
      // regions
      '/list/regions',
      '/list/regions/europe',
      // filter city
      '/filter/city',
      // sleep
      '/list/cities/:city/places/sleep',
      // work
      '/list/cities/:city/places/work'
    ];
  }

  get(path, params) {
    return axios.get(path, params);
  }

  getCity(city) {
    return axios.get(`${this.domain}/${city}.json`);
  }

}