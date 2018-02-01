var express = require('express');
var app = express();
app.set('view engine','pug');
app.listen(3000);

app.use(express.static('public'));

app.get('/', (req,res) => {
    res.render('index');
});
