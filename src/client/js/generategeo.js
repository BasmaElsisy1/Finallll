// geoNames API 
let geoNames_API = 'basma';

console.log (`your geoNames_API is ${geoNames_API}`);


const generateGeo = async(inputt) => {
    const res = await fetch(`http://api.geonames.org/searchJSON?q=${inputt}&maxRows=1&username=${geoNames_API}`)
        try{
            const geoData = await res.json();
            console.log(geoData)
            console.log("Longitude: " + geoData.geonames[0].lng)
            console.log("Latitude: "+ geoData.geonames[0].lat)
            const lat = geoData.geonames[0].lat
            const lng = geoData.geonames[0].lng
            return {
              lat,
              lng
            };
        } catch (error) {
            console.log("error", error);
        } 
   }
 
export{generateGeo}