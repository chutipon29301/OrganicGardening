var express = require('express');
var path = require('path');
var app = express();
app.listen(process.env.PORT | 3000, _ => {
    console.log('Listening on port ' + (process.env.PORT | 3000));
});
app.use(express.static(path.join(__dirname, 'public')));