const listBusqueda = async (codigo_postal)=>{
    console.log(JSON.stringify({codigo_postal}))
    return await fetch('http://localhost:3001/lista',{
        method: 'POST',
        body: JSON.stringify({codigo_postal}),
        headers:{
            'Content-Type': 'application/json',
        }
    })
    .then(res=>res.json())
    .catch(err => console.log(err)) 
}

export { listBusqueda };