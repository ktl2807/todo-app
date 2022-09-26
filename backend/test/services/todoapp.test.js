const assert = require('assert');
const app = require('../../src/app');

describe('\'todoapp\' service', () => {
  it('registered the service', () => {
    const service = app.service('todoapp');

    assert.ok(service, 'Registered the service');
  });
});
