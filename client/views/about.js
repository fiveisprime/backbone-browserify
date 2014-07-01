module.exports = function (_, Backbone, Views) {
  'use strict';

  Views.About = Backbone.View.extend({
    el: '#content',
    template: require('../templates/about.handlebars'),
    initialize: function () {
      this.render();
    },
    render: function () {
      this.$el.html(this.template());
    }
  });
};
