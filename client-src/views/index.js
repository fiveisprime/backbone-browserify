module.exports = function (_, $, Backbone) {
  'use strict';

  var views = {};

  views.Index = Backbone.View.extend({
    el: '#content',
    initialize: function() {
      this.$el.append($('<h2>', { text: 'Hello World!' }));
    }
  });

  // TODO: bootstrap other views.

  return views;
};
