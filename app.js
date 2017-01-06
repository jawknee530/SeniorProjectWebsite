var express = require('express');
var reload = require('reload');
var app = express();
var clientFile = require('./data/clients.json');
var instructionFile = require('./data/instructions.json');

app.set('port', process.env.PORT || 3000);
app.set('clientData', clientFile);
app.set('instructionData', instructionFile);
app.set('view engine', 'ejs');
app.set('views', './views');

app.locals.siteTitle = 'Simple Torrent Tracker';

app.use(express.static('./public'));
app.use(require('./routes/index'));
app.use(require('./routes/instructions'));
app.use(require('./routes/info'));

var server = app.listen(app.get('port'), function() {
  console.log('Listening on port ' + app.get('port'));
});

reload(server, app);
