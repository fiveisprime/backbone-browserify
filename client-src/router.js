module.exports = function (_, $, Backbone, views) {
  'use strict';

  var Router = Backbone.Router.extend({
    routes: {
      '': 'index'
    },
    index: function () {
      return new views.Index();
    }
  });

  return new Router();
};
