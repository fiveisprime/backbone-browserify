'use strict';

var Backbone = require('backbone');
var _        = require('underscore');
var $        = require('jquery');

Backbone.$ = $;

var views = require('./views')(_, $, Backbone);

// Start the router.
require('./router')(_, $, Backbone, views);

Backbone.history.start();
