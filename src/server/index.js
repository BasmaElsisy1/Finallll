
projectData = {};

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
    console.log (projectData);
    });

app.post('/addGeoData' , function (req, res){
    console.log(req.body);

    let geoData = {
        country: req.body.country
    }

    projectData = geoData;
    res.send(geoData);
})

app.post('/addWeatherData' , function (req, res){
    console.log(req.body);

    let weatherData = {
        temp: req.body.temp,
        description: req.body.description
    }

    projectData = weatherData;
    res.send(weatherData);
})

app.post('/addPixabayData' , function(req,res){
    console.log(req.body);

    let pixabayData = {
        Image: req.body.image
    }

    projectData = pixabayData;
    res.send(pixabayData);
})
//app.post('/addPixabayData', generatePixabay)


    
/*app.post('/add', function (req, res){

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
*/
