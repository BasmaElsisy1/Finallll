
//Geonames data
const geoNames_API = 'basma';
const geoNames_baseurl = 'http://api.geonames.org/searchJSON?';
console.log(geoNames_API);
//Weatherbit data
const weather_API = '08f22735c6ed4dc2b08469ec23dfc983'
const baseURL1 = 'http://api.weatherbit.io/v2.0/current?';
const baseURL2 = ' http://api.weatherbit.io/v2.0/forecast/daily?';
let weatherbit_baseurl=''
//Pixabay data
const pixabay_API = '23384321-47f035c16963a374fceb542d7';
const pixabay_baseurl = 'https://pixabay.com/api/?';

const generate = document.getElementById('submit'); 
generate.addEventListener('click' , generateData);

function  generateData (e){
    e.preventDefault();
    const userInput = document.getElementById('userInput').value;
    const date = document.getElementById('date').value;
    const countdown = getCountdown (date);
    const days = document.getElementById('days');
    const country1 = document.getElementById('country');
    const temp = document.getElementById('temp').value;
    const description = document.getElementById('description').value;
    const image = document.getElementById('image');


    function getCountdown (date){
        const countdownDate = new Date(date).getTime();
        const now = new Date().getTime();
        const difference = countdownDate - now;
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        return days;
    }
    if (countdown <= 7){
     weatherbit_baseurl = baseURL1;
    } else {
        weatherbit_baseurl = baseURL2;
    }

    const generateGeo = async (geoNames_baseurl,geoNames_API, userInput)=>{
        const res = await fetch ( `${geoNames_baseurl}username=${geoNames_API}&q=${userInput}`);
        try{
            const data = await res.json();
            console.log(data);
            return data;
        }
        catch (error){
            console.log("error" , error);
        }
    }
    const postData = async (url= '' , data = {})=>{
        console.log ('Data is:' , data);
        const userInput = document.getElementById('userInput').value;
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
        
   

        let locationData = generateGeo(geoNames_baseurl, geoNames_API, userInput).then(function (data) {
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

const userView = async()=>{
    const req =await fetch('http://localhost:8080/all');
    try{
        const projectData = await req.json();
        country1.innerHTML = `Country: ${allData.country}`
        temp.innerHTML = `Temperature: ${allData.temp} °C`
        description.innerHTML= allData.description;
        document.getElementById('image').src = allData.url;
        days.innerHTML = allData.days;
    }
    catch(error){
        console.log('error' , error);
    }
}
export { generateData , }