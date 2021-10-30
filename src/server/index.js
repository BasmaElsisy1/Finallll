
projectData = {};
geoData = {};
const express = require('express');

const cors = require('cors');

const bodyParser = require('body-parser');

const fetch = require('node-fetch');

//
const app = express();

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use (cors()); 


app.use(express.static('dist'));
const dotenv = require('dotenv');
dotenv.config();

// designates what port the app will listen to for incoming requests
const port = 8080;
app.listen(port, function () {
    console.log('Example app listening on port 8080!')
})

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
    // res.sendFile(path.resolve('src/client/views/index.html'))
})

app.get('/all' , function(req,res){
    res.send(projectData);
    console.log ("ProjectData is" , projectData);
    });

app.post('/addGeoData' , function (req, res){
   let geoData={
      lon : req.body.lon,
      lat: req.body.lat,
      country:req.body.country
   }
    projectData['country']=geoData.country;

    res.send(geoData);
})

app.post('/addWeatherData' , function (req, res){
  let weatherData ={
      temp: req.body.temp,
      description: req.body.description
  }
    projectData['temp']=weatherData.temp;
    projectData['description']=weatherData.description;
    res.send(weatherData);
})

app.post('/addPixabayData' , function(req,res){

 let pixabayData = {
        image: req.body.picture
    }
    projectData['image']=pixabayData.image;
    res.send(pixabayData);
})
