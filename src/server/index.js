projectData= {};

const dotenv = require('dotenv');
dotenv.config();


const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const fetch = require('node-fetch');

var axios = require ('axios');
var path = require('path');

var req = require ('request');




app.use(express.static('dist'));
console.log(__dirname);

app.use(express.json());

const cors = require('cors');
app.use (cors()); 

app.use(express.urlencoded({extended:false}));

const { res } = require('express');


app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
    // res.sendFile(path.resolve('src/client/views/index.html'))
})

// designates what port the app will listen to for incoming requests
const port = 8080;
app.listen(port, function () {
    console.log('Example app listening on port 8080!')
})

app.get('http://localhost:8080/all' , function(req,res){
    res.send(projectData);
    console.log (projectData);
    });
    
app.post('http://localhost:8080/add', function (req, res){

    if(req.body.userInput){

        let geoData = {
            country: req.body.country,
            latitude: req.body.lat,
            longitude: req.body.lng
        };

        projectData= geoData;
        // return data here!!
        return projectData
        res.send(projectData);
    }
    else if (req.body.weather){

        let weatherr = {
            temp: req.body.temp,
            description: req.body.description
        };
        projectData = weatherr;
        res.send(projectData);
    }
    else if (req.body.image){
        let pixabay = {
            Image: req.body.image
        };
        projectData = pixabay;
        res.send(projectData);

    }

})



