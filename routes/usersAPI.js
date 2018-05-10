var db = require("../models");

module.exports = function(app) {
  app.get("/api/User", function(req, res) {
    // 1. Add a join to include all of each Reading's Posts
    db.User.findAll({}).then(function(users) {
      res.json(users);
    });
  });

  app.get("/api/User/:id", function(req, res) {
    // 2; Add a join to include all of the Reading's Posts here
    db.User.findOne({
      where: {
        id: req.params.id
      }
    }).then(function(users) {
      res.json(users);
    });
  });



  app.delete("/api/User/:user", function(req, res) {
    db.User.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(users) {
      res.json(users);
    });
  });

};