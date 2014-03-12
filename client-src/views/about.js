module.exports = function(_, Backbone, views) {
  'use strict';

  views.About = Backbone.View.extend({
    el: '#content',
    template: require('../templates/about.handlebars'),
    initialize: function() {
      this.render();
    },
    render: function() {
      this.$el.html(this.template());
    }
  });
};
