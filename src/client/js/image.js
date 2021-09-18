let API = '23384321-47f035c16963a374fceb542d7';
console.log (`your API is ${API}`);


const getPixabay = async(destinationCity) => {
    let inputt = document.getElementById('inputt').value;
    const res = await fetch(`https://pixabay.com/api/?key=${API}&q=${inputt}`)
        try{
            const pixabay = await res.json();
            console.log(pixabay)
            console.log(pixabay.hits[0].webformatURL)
            return pixabay;
        } catch (error) {
            console.log("error", error);
        } 
   }

export {
    getPixabay
}