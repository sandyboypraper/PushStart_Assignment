const express = require('express');

var app = express();




app.post('/' , (req, res) => {
    var objstr = req.body;
    var obj = JSON.parse(objstr);


    // here the code for the data base

    res.send(objstr);
});

app.listen(3001);

