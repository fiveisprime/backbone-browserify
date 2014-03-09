module.exports = function (_, $, Backbone) {
  'use strict';

  var views = {};

  views.Index = Backbone.View.extend({
    el: '#content',
    template: require('../templates/index.handlebars'),
    initialize: function() {
      this.render();
    },
    render: function() {
      this.$el.html(this.template({ text: 'Hello World!' }));
    }
  });

  return views;
};
