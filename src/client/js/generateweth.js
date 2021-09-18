
let weather_API ='08f22735c6ed4dc2b08469ec23dfc983';
console.log (`your weather_API is ${weather_API}`);

const generateWeth= async (lat,lng) => {
    const res = await fetch(
      `http://api.weatherbit.io/v2.0/forecast/daily?lat=${lat}&lon=${lng}&key=${weather_API}`)
      
        try{
            const weatherr = await res.json();
            console.log(weatherr)
            console.log("Temp: " + weatherr.data[0].temp)
              return {
              temp:  weatherr.data[0].temp, 
            };
        } catch (error) {
            console.log("error", error);
        } 
   }

export {generateWeth}