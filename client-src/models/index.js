module.exports = function (Backbone) {
  'use strict';

  var Models = {};

  Models.Color = Backbone.Model.extend({
    idAttribute: 'name',
    defaults: { name: '' }
  });

  Models.Colors = Backbone.Collection.extend({
    url: '/colors',
    model: Models.Color
  });

  //
  // Bootstrap other models. Pass around the Models object so other models
  //    can attach to it.
  //
  // require('./user')(Models);
  //

  return Models;
};
