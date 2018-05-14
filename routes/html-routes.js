// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // login page
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/form-3/index.html"));
  });

  // page about what the project is about
  app.get("/awair", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/form-3/about.html"));
  });

  // Page about our team
  app.get("/team", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/form-3/theTeam.html"));
  });

  // will display all readings for selected device ^^^^^

  app.get("/graphs", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/form-3/graphs.html"));
  });
};