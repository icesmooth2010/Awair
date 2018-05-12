var db = require("../models");

module.exports = function(app) {
  app.get("/api/Reading", function(req, res) {
    // 1. Add a join to include all of each Reading's Posts
    db.Reading.findAll({}).then(function(readings) {
      res.json(readings);
    });
  });
  
  app.get("/api/Reading/:mac", function(req, res) {
    // 2; Add a join to include all of the Reading's Posts here
    db.Reading.findAll({
      where: {
        mac: req.params.mac
      }
    }).then(function(readings) {
      res.json(readings);
    });
  });



  app.delete("/api/Reading/:mac", function(req, res) {
    db.Reading.destroy({
      where: {
        mac: req.params.mac
      }
    }).then(function(readings) {
      res.json(readings);
    });
  });

};