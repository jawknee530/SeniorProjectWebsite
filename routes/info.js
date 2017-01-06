var express = require('express');
var router = express.Router();


router.get('/info', function(req, res) {
  var clients = req.app.get('clientData');
  var clientPhotos = clients.images;
  var clientAddresses = clients.sites;

  var instructions = req.app.get('instructionData');
  var instructPhotos = instructions.images;
  var instructText = instructions.text;

  res.render('info', {
    pageTitle: 'Info',
    clients: clientPhotos,
    sites: clientAddresses,
    instructs: instructPhotos,
    text: instructText,
    pageID: 'info'
  });


});


module.exports = router;
