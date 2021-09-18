const postData = async ( url='http://localhost:8080/add', data = {}) => {
    const res = await fetch( 'http://localhost:8080/add', {
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
}

export{postData}