var db = require("../models");

module.exports = function(app) {
  app.get("/api/readings", function(req, res) {
    // 1. Add a join to include all of each air_quality's Posts
    db.air_quality.findAll({}).then(function(dbair_quality) {
      res.json(dbair_quality);
    });
  });

  app.get("/api/readings/:id", function(req, res) {
    // 2; Add a join to include all of the air_quality's Posts here
    db.air_quality.findOne({
      where: {
        id: req.params.id
      }
    }).then(function(dbair_quality) {
      res.json(dbair_quality);
    });
  });



  app.delete("/api/readings/:mac", function(req, res) {
    db.air_quality.destroy({
      where: {
        mac: req.params.mac
      }
    }).then(function(dbair_quality) {
      res.json(dbair_quality);
    });
  });

};