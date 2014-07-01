module.exports = function () {
  var models = require('express').Router();

  models.get('/colors', function (req, res) {
    res.send(JSON.stringify([
      { name: 'green' }
    , { name: 'blue'  }
    , { name: 'red'   }
    ]));
  });

  models.put('/colors/:name', function (req, res) {
    console.log('saving %s', req.params.name);
    res.send();
  });

  return models;
};
