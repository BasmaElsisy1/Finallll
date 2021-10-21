//Geonames data
const geoNames_API = 'basma';
const geoNames_baseurl = 'http://api.geonames.org/searchJSON?';
console.log(geoNames_API);
//Weatherbit data
const weather_API = 'f7d2dacb497b41a1a665f0526225a067'
const baseURL1 = 'http://api.weatherbit.io/v2.0/current?';
const baseURL2 = ' http://api.weatherbit.io/v2.0/forecast/daily?';
let weatherbit_baseurl=''
//Pixabay data
const pixabay_API = '23384321-47f035c16963a374fceb542d7';
const pixabay_baseurl = 'https://pixabay.com/api/?';

let today = new Date();

const generate = document.getElementById('submit'); 
generate.addEventListener('click' , generateData);

function  generateData (e){
    e.preventDefault();
    const userInput = document.getElementById('userInput').value;


   // Countdown Timer
       
    const d = new Date();
    let today = d.getDate();
    console.log(today);
  
    const depDate = document.getElementById('date').value;
    const depDatee = new Date(depDate);
    let depp = depDatee.getDate();
    console.log(depp);
  
    let countDown = depp - today ;
  
    if (countDown <= 7){
    weatherbit_baseurl = baseURL1;
     console.log("hi");
    } 
    else {
      weatherbit_baseurl = baseURL2;
      console.log("bye");
    }



const postData = async (url= '' , data = {})=>{
    console.log ('Data is:' , data);
    const res = await fetch( url, {
            method: 'POST',
            credentials: "same-origin",
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
        });
    try {
        const newData = await res.json()
        console.log(newData)
        return newData
      } catch (error) {
        console.log("error", error)
      }
    };
    
    const generateGeo = async (geoNames_baseurl,geoNames_API, userInput)=>{
        const res = await fetch ( `${geoNames_baseurl}username=${geoNames_API}&q=${userInput}`);
        try{
            const data = await res.json();
            return data;
        }
        catch (error){
            console.log("error" , error);
        }
    }


    generateGeo(geoNames_baseurl,geoNames_API, userInput)
    .then(function(data){
        console.log(data);
        postData('/addGeoData' , {
            lat: data.geonames[0].lat,
            lon: data.geonames[0].lng,
            country: data.geonames[0].countryName,})
            .then(userView());
    })
   


const generateWeather = async (weatherbit_baseurl,weather_API)=>{
const res = await fetch (`${weatherbit_baseurl}lat=51.50853&lon=-0.12574&key=${weather_API}`);
try{
    const dataa = await res.json();
    return dataa;
}
catch(error){
    console.log("error" , error);
}
}


generateWeather(weatherbit_baseurl,weather_API)
.then(function(dataa){
    console.log(dataa);
    postData('/addWeatherData' , {
        temp : dataa.data[0].temp,
        description: dataa.data[0].weather.description
    })
    .then(userView);
})
  

const generatePixabay = async (pixabay_baseurl, pixabay_API, userInput) =>{
    const res = await fetch (`${pixabay_baseurl}key=${pixabay_API}&q=${userInput}&image_type=photo`);
    try {
        const dataaa = await res.json();
        return dataaa;
    }
    catch (error){
        console.log ("error" , error);
    }
}


generatePixabay(pixabay_baseurl, pixabay_API, userInput)
.then (function(dataaa){
    console.log(dataaa);
    postData('/addPixabayData' , {picture: dataaa.hits[0].webformatURL})
    .then (userView());
})
    const userView = async()=>{
            const req =await fetch('/all');
            try{
                const allData = await req.json();
                document.getElementById('country').innerHTML = "Country: " + (allData.country);
                document.getElementById('temp').innerHTML = "Temperature: " + (allData.temp);
                document.getElementById('description').innerHTML = "description: " + (allData.description);
                document.getElementById('image').src = allData.picture;
                document.getElementById('image').alt = allData.country;
               // days.innerHTML = allData.days;
            }
            catch(error){
                console.log('error' , error);
            }
        }
}
export { generateData}
