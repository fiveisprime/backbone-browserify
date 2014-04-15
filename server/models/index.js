module.exports = function (app) {

  app.get('/colors', function (req, res) {
    res.send(JSON.stringify([
      { name: 'green' },
      { name: 'blue'  },
      { name: 'red'   }
    ]));
  });

  app.put('/colors/:name', function (req, res) {
    console.log('saving %s', req.params.name);
    res.send();
  });
};
