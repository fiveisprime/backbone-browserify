module.exports = function (_, Backbone, Models) {
  'use strict';

  var Views = {};

  Views.Index = Backbone.View.extend({
    el: '#content',
    template: require('../templates/index.handlebars'),
    initialize: function() {
      this.colors = new Models.Colors();
      this.colors.fetch({ success: _.bind(this.render, this) });
    },
    render: function() {
      this.$el.html(this.template({
        intro  : 'Hello from Browserify!',
        colors : this.colors.toJSON()
      }));
    }
  });

  // Bootstrap other views.
  require('./about')(_, Backbone, Views);

  return Views;
};
