var express = require('express');
var router = express.Router();


router.get('/instructions', function(req, res) {
  var clients = req.app.get('clientData');
  var clientPhotos = clients.images;
  var clientAddresses = clients.sites;

  var instructions = req.app.get('instructionData');
  var instructPhotos = instructions.images;

  res.render('instructions', {
    pageTitle: 'Instructions',
    clients: clientPhotos,
    sites: clientAddresses,
    instructs: instructPhotos,
    pageID: 'instructions'
  });


});


module.exports = router;
