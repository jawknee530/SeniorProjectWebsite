var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  var clients = req.app.get('clientData');
  var clientPhotos = clients.images;
  var clientAddresses = clients.sites;

  res.render('index', {
    pageTitle: 'Home',
    clients: clientPhotos,
    sites: clientAddresses,
    pageID: 'home'
  });
});

module.exports = router;
