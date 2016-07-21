const express = require('express');
const partials = require('express-partials');
const serveStatic = require('serve-static');
const bodyParser = require('body-parser');

const helpers = require('../routes/routeHelpers');

const app = express();

app.use(partials());
app.use(bodyParser.json());
app.use(serveStatic(__dirname + '/../client'));

app.get('/api/users', function(req, res) {
  helpers.getAllUsers(function(err, users) {
    if (err) {
      res.status(404).send(err);
    } else {
      res.status(200).send(users);
    }
  });
});

app.get('/api/datasets', function(req, res) {
  helpers.getAllDataSets(function(err, dataSets) {
    if (err) {
      res.status(404).send(err);
    } else {
      res.status(200).send(dataSets);
    }
  });
});

app.get('/api/users/:username', function(req, res) {
  helpers.getUser(req.params.username, function(err, user) {
    if (err) {
      res.status(404).send(err);
    } else {
      res.status(200).send(user);
    }
  });
});

app.get('/api/datasets/:chartName', function(req, res) {
  helpers.getDataSet(req.params.chartName, function(err, dataSet) {
    if (err) {
      res.status(404).send(err);
    } else {
      res.status(200).send(dataSet);
    }
  });
});

app.post('/api/users', function(req, res) {
  helpers.addUser(req.body, function(err, result) {
    if (err) {
      res.status(404).send(err);
    } else {
      res.status(201).send(req.body.username);
    }
  });
});

app.post('/api/datasets', function(req, res) {
  helpers.addDataSet(req.body, function(err, dataSet) {
    if (err) {
      res.status(404).send(err);
    } else {
      res.status(201).send(req.body.chartName);
    }
  });
});

app.put('/api/users/:username', function(req, res) {
  helpers.updateUser(
    req.params.username,
    { username: req.body.username, password: req.body.password },
    function(err, user) {
      if (err) {
        res.status(404).send(err);
      } else {
        res.status(200).send(user);
      }
    }
  );
});

app.put('/api/datasets/:chartName', function(req, res) {
  helpers.updateDataSet(
    req.params.chartName,
    { chart: req.body.char, chartName: req.body.chartName, username: req.body.username },
    function(err, dataSet) {
      if (err) {
        res.status(404).send(err);
      } else {
        res.status(200).send(dataSet);
      }
    }
  );
});

app.delete('/api/users/:username', function(req, res) {
  helpers.deleteUser(req.params.username, function(err, user) {
    if (err) {
      res.status(404).send(err);
    } else {
      res.status(200).send(user);
    }
  });
});

app.delete('/api/datasets/:chartName', function(req, res) {
  helpers.deleteChart(req.params.chartName, function(err, dataSet) {
    if (err) {
      res.status(404).send(err);
    } else {
      res.status(200).send(dataSet);
    }
  });
});

module.exports = app;
