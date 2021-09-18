let projectData= {};

const bodyParser = require('body-parser');
var axios = require ('axios');
var path = require('path');
const express = require('express');
var req = require ('request');
const dotenv = require('dotenv');

const app = express();


app.use(express.static('dist'));
console.log(__dirname);

dotenv.config();

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

let geoNames_API = process.env.geoNames_API;
let weather_API = process.env.weather_API;
let API = process.env.API;
    
app.post('/add', async (req, res) =>  {

    if(req.body.inputt){

        let geoData = {
            City: req.body.inputt,
            Latitude: req.body.lat,
            Longitude: req.body.lng
        };

        projectData.geoData = geoData;
        console.log(geoData);
    }
    else if (req.body.weather){

        let weatherr = {
            Temperature: req.body.weatherr
        };
        projectData.weatherr=weatherr;
        console.log(weatherr);
    }
    else if (req.body.image){
        let pixabay = {
            Image: req.body.image
        };
        projectData.pixabay=pixabay;
        console.log(pixabay);
    }


app.get('/all' , (req,res) => {
    res.send(projectData);
    console.log (projectData);
    });

})