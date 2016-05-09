import { expect } from 'chai';
import nock from 'nock';
import axios from 'axios';
import fs from 'fs';
import NomadListApi from '../src/'

describe('Nomad API', () => {
  
  let data, api;
  before(() => {
    data = JSON.parse(fs.readFileSync('test/fixtures/amsterdam-netherlands.json', 'utf-8'));
    api = new NomadListApi();
  });

  beforeEach(() => {
    nock('https://nomadlist.com')
      .get('/amsterdam-netherlands.json')
      .reply(200, data);
  });

  it('should get a single city', (done) => {
    api.getCity('amsterdam-netherlands')
      .then((res) => {
        expect(res.data).to.be.an('object');;
        expect(res.data).to.deep.equal(data);
        done();
      });
  });

});