var db = require("../models");

module.exports = function(app) {
  app.get("/api/device", function(req, res) {
    // 1. Add a join to include all of each Reading's Posts
    db.Device.findAll({}).then(function(devices) {
      res.json(devices);
    });
  });

  app.get("/api/device/:mac", function(req, res) {
    // 2; Add a join to include all of the Reading's Posts here
    db.Device.findOne({
      where: {
        mac: req.params.mac
      }
    }).then(function(devices) {
      res.json(devices);
    });
  });

  app.post("/api/device", function(req, res) {
    db.Device.create(req.body).then(function(devices) {
      res.json(devices);
    });
  });

  app.delete("/api/device/:mac", function(req, res) {
    db.Device.destroy({
      where: {
        mac: req.params.mac
      }
    }).then(function(devices) {
      res.json(devices);
    });
  });

};