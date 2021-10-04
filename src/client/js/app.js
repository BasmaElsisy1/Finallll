
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
    const country = document.getElementById('country');
    const temp = document.getElementById('temp').value;
    const description = document.getElementById('description').value;
    const image = document.getElementById('image');


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
        
    const userView = async()=>{
        const req = await fetch ('http://localhost:8080/all');
        try{
            const allData = await req.json();
            country.innerHTML = "Country is:" + (allData.country);
            temp.innerHTML = "The tempreture is:" + (allData.temp);
            description.innerHTML= allData.description;
            document.getElementById('image').src = webformatURL;
            days.innerHTML = allData.days;
        }
        catch(error){
            console.log('error' , error);
        }
    }

        let locationData = generateGeo(geoNames_baseurl, geoNames_API, userInput).then(function (data) {
            postData("http://localhost:8080/add", {
              lat: data.geonames[0].lat,
              lng: data.geonames[0].lng,
              country: data.geonames[0].country,
            });
          return {
              lat: data.geonames[0].lat,
              lng: data.geonames[0].lng,
              country: data.geonames[0].country
            };
            
      });
      generateWeth(weatherbit_baseurl, weather_API, locationData.lat, locationData.lng);
const generateWeth = async  (weatherbit_baseurl, weather_API,lat,lng)=>{
    const res = await fetch (`${weatherbit_baseurl}lat=${lat}&lng=${lng}&key=${weather_API}`);
    try {
        const data = await res.json();
        console.log (data);
        return (data);
    } catch (error){
        console.log ("error" , error);
    }
}

generateWeth (weatherbit_baseurl, weather_API, lat,lng)
.then (function(data){
    console.log(data);
    postData ('http://localhost:8080/add', {temp: data.main.temp , description: data.main.description})
    
})
 
const getPixabay = async (pixabay_baseurl, pixabay_API, userInput) =>{
    const res = await fetch (`${pixabay_baseurl}key=${pixabay_API}&q=${userInput}&image_type=photo`);
    try {
        const data = await res.json();
        console.log (data);
        return data;
    }
    catch(error) {
          console.log ("error" , error);
    }
}

getPixabay(pixabay_baseurl, pixabay_API, userInput)
.then(function(data){
    console.log(data);
    postData ('http://localhost:8080/add', {picture: data.main.picData})
    .then (userView());
})

function getCountdown (date){
    const countdownDate = new Date(date).getTime();
    const now = new Date().getTime();
    const difference = countdownDate - now;
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    return days;
}

function getCountdown (date){
    const countdownDate = new Date(date).getTime();
    const now = new Date().getTime();
    const difference = countdownDate - now;
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    return days;
}


}
export { generateData}