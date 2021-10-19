//Geonames data
const geoNames_API = 'basma';
const geoNames_baseurl = 'http://api.geonames.org/searchJSON?';
console.log(geoNames_API);
//Weatherbit data
const weather_API = '4d82b8aac8b945b5991e3e038f463bea'
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
    const date = document.getElementById('date').value;
    //const countdown = getCountdown (date);
    //const days = document.getElementById('days');
    const country = document.getElementById('country');
    const temp = document.getElementById('temp').value;
    const description = document.getElementById('description').value;
    //const image = document.getElementById('image');


   /* // Countdown Timer
         let today = new Date();
         let depDate = new Date(date);
         depDate.setFullYear(today.getFullYear());
         let msPerDay = 24 * 60 * 60 * 1000;
         let countDown = (depDate.getTime() - today.getTime()) / msPerDay;
         countDown = Math.round(countDown);
         console.log(countDown);
    }
    if (countdown <= 7){
     weatherbit_baseurl = baseURL1;
    } else {
        weatherbit_baseurl = baseURL2;
    }
    */

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
    


const generateWeather = async (baseURL1,weather_API)=>{
const res = await fetch (`${baseURL1}lat=51.50853&lon=-0.12574&key=${weather_API}`);
try{
    const dataa = await res.json();
    return dataa;
}
catch(error){
    console.log("error" , error);
}
}


generateWeather(baseURL1,weather_API)
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
               // days.innerHTML = allData.days;
            }
            catch(error){
                console.log('error' , error);
            }
        }
    
   /*     let locationData = generateGeo(geoNames_baseurl, geoNames_API, userInput).then(function (data) {
            postData("http://localhost:8080/add", {
                
              lat: data.geonames[0].lat,
              lon: data.geonames[0].lng,
              country: data.geonames[0].countryName,
            });
            console.log ("Longitude:" + data.geonames[0].lng)
            console.log ("latitude:" + data.geonames[0].lat )
            console.log ("Country is " + data.geonames[0].countryName)
            const lon = data.geonames[0].lng;
            const lat = data.geonames[0].lat;
            const country = data.geonames[0].countryName;
          return {
              lat,
              lon,
              country
            };
            
      });


const generateWeth = async  (baseURL1,lat,lon)=>{
    const res = await fetch (`${baseURL1}lat=${lat}&lon=${lon}&key=08f22735c6ed4dc2b08469ec23dfc983`);
    try {
        const wethh = await res.json();
        console.log (wethh);
        return (wethh);
    } catch (error){
        console.log ("error" , error);
    }
}

generateWeth (baseURL1, weather_API, locationData.lat,locationData.lng)
.then (function(wethh){
    console.log(wethh);
    postData ('http://localhost:8080/add', {temp: wethh.data[0].temp , description: wethh.data[0].weather.description});
    
    return {
        temp :  wethh.data[0].temp,
        description: wethh.data[0].weather.description
    }
});

 
const getPixabay = async (pixabay_baseurl, pixabay_API, userInput) =>{
    const res = await fetch (`${pixabay_baseurl}key=${pixabay_API}&q=${userInput}&image_type=photo`);
    try {
        const imageData = await res.json();
        console.log (imageData);
        return imageData;
    }
    catch(error) {
          console.log ("error" , error);
    }
}

getPixabay(pixabay_baseurl, pixabay_API, userInput)
.then(function(imageData){
    console.log(imageData);
    postData ('http://localhost:8080/add', {picture: imageData.hits[0].largeImageURL})
    return {
        picture: imageData.hits[0].largeImageURL
    }
})

function getCountdown (date){
    const countdownDate = new Date(date).getTime();
    const now = new Date().getTime();
    const difference = countdownDate - now;
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    return days;
}


}
*/
}
export { generateData}
