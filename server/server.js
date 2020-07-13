const express = require('express');
const app = express();
const port = 3001;

var data1234 = require('./data-1234.json');
var data4321 = require('./data-4321.json');

app.get('/getData/:dataset', (req, res, next) => {
    const {dataset} = req.params;
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');
    if(dataset === '1234'){
        res.json(data1234); 
    }else if(dataset === '4321'){
        res.json(data4321);
    }else{
        res.send("Dataset not found.")
    }
    res.end();
    next();
});

app.listen(port, () => {console.log("Statistics app running on port 3001")});
