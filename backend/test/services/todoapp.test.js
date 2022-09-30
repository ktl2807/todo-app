const assert = require('assert');
//const { default: axios } = require('axios');
const app = require('../../src/app');

describe('\'todoapp\' service', () => {

  it('registered the service', () => {
    const service = app.service('todoapp');

    assert.ok(service, 'Registered the service');
  });

  it('test the service', async () => {
    const t = await app.service('todoapp').create({todoText:'test service',isCompleted:false, time:Date(),isEdit:false});
    console.log(t);
  });

 
  


});


