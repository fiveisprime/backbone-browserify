'use strict';

var Backbone = require('backbone');
var _        = require('underscore');
var $        = require('jquery');

Backbone.$ = $;

var Models = require('./models')(Backbone);
var Views = require('./views')(_, Backbone, Models);

// Start the router.
require('./router')(Backbone, Views);

Backbone.history.start();
