import './Landing.css';
import { useState,useEffect } from 'react';import {listBusqueda} from '../../api/api';


function Landing() {
    const [list, setList] = useState([])
    const [loading,setLoading] = useState(false)

    async function newListBusqueda(event) {
        setList([])
        event.preventDefault()
        setLoading(true)
        let listBak = await listBusqueda(event.target[0].value)
        setList(listBak)
        setLoading(false)
        
    }

  return (
    <div className="container row contenedor">
        <h1 className="titulo col-12">Buscar Código Postal</h1>
        <form onSubmit={newListBusqueda}>
            <div className="input-group mb-3 col-4 offset-4 input">
                <span className="input-group-text" id="inputGroup-sizing-default">Código Postal</span>
                <input type="number" min="0" max="99998" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
    
                { !loading && (
                <button type="submit" className="btn btn-dark" >Buscar</button>
                )}
                { loading && (
                   <div className="text-center">
                    <div className="spinner-grow text-primary" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </div>
                  </div>
                )}
                </div>
        </form>


        <div className="card-body lista">
            <h3>Lista Busquedas:</h3>
            <table className="table table-bordered table-striped">
                <thead>
                    <tr>
                        <th>Codigo Postal</th>
                        <th>Asentamiento</th>
                        <th>Tipo</th>
                        <th>Municipio</th>
                        <th>Ciudad</th>
                        <th>Estado</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        list.map(data =>(
                        <tr key={data.asentamiento}>
                            <td>{data.cp}</td>
                            <td>{data.asentamiento}</td>
                            <td>{data.tipo}</td>
                            <td>{data.municipio}</td>
                            <td>{data.ciudad}</td>
                            <td>{data.estado}</td>
                        </tr>
                            ))
                    }
                </tbody>
            </table>
        </div>







    </div>
  )
}

export {Landing}