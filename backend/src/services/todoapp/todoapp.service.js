// Initializes the `todoapp` service on path `/todoapp`
const { Todoapp } = require('./todoapp.class');
const createModel = require('../../models/todoapp.model');
const hooks = require('./todoapp.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/todoapp', new Todoapp(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('todoapp');

  service.hooks(hooks);
};
