const updateUI = async ()=> {
    const req = await fetch ('http://localhost:8080/all');
    try{
        const projectData = await req.json()
        console.log(projectData);
        document.getElementById('inputt').innerHTML=`City: ${inputt}`;
        document.getElementById('weather').innerHTML=`Temperature: ${projectData.weatherr.Temperature}`;
        document.getElementById("image").innerHTML = `<img src="${projectData.pixabay.Image}" />`;
  
        
    }catch(error) {
        console.log("error" , error)
    }
  }

  export {updateUI}