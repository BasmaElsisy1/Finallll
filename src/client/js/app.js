
// Define global variables
let inputt = document.getElementById('inputt').value;
const date = document.getElementById('date');
const weather = document.getElementById('weather');
const image = document.getElementById('image');



const generate = document.getElementById('submit'); 
generate.addEventListener('click' , generateData);

async function  generateData (event){
    event.preventDefault();
    console.log (inputt);

    Client.generateGeo(inputt).then (async (geoData)=>{
       const res = await Client.postData("/add", {
           "Country" : inputt,
           "latitude" :geoData.lat,
           "longitude":geoData.lng
       })

    Client.generateWeth(geoData.lat, geoData.lng)
    .then(async (weatherr) =>{
        const res= await postData("/add",
        {
            "Temp": weatherr.weather
        })
    })
    Client.generateImage(inputt)
    .then(async(pixabay)=>{
        "image"; pixabay.hits[0].webformateURL
    })
   })
   .then(()=>{
       updateUI
   })
}
    
export { generateData}