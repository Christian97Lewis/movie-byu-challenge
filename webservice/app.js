var express = require('express');
var app = express();
app.get('/movies', function (req, res) {
    var searchParam = req.query.search;
    console.log(searchParam);
});
app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});