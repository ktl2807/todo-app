const todoapp = require('./todoapp/todoapp.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(todoapp);
};
