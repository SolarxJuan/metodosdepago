import { useState, useEffect } from "react";
import './Metodos.css';

function Metodos(){

    const [method, setmethod] = useState([]);
    useEffect(()=> {
        traermetododepago();
    }, []);
    async function traermetododepago(){
        await fetch("http://localhost:3000/api/metodos",{
            method:"GET",
            headers: {
                "Content-Type":"application/json"
            }
    }).then(response=> response.json())
    .then(data=> setmethod(data));
            
    }
    
    const [detalles, setdetalles] = useState("");
    const [nombre, setNombre] = useState("");
    

    async function guardarMethod(e){
    e.preventDefault();
    await fetch("http://localhost:3000/api/metodos", {
        method: "POST",
        headers: {
        "Content-Type": "application/json"
        },
        body: JSON.stringify({ detalles, nombre })
    });
    traermetododepago();
    }

    async function eliminarMetodo(id) {
        await fetch(`http://localhost:3000/api/metodos/${id}`,{
            method: "DELETE",
            headers:{
                "Content-Type":"application/json"
            }
        });
        traermetododepago();
    }

return(
    <div>
        <h2>Crear Metodos</h2>
        <form onSubmit={guardarMethod}>    
            <input type="text" placeholder="Detalles" onChange={(event)=>setdetalles(event.target.value)}/>
            <input type="text" placeholder="Nombre" onChange={(event)=>setNombre(event.target.value)}/>
            <button type="submit">Guardar</button>
        </form> 
        <h1>Listar Metodos</h1>
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Nombre</th>
                    <th>Detalles</th>
                    <th>Botones:D</th>
                </tr>
            </thead>
            <tbody>
                {method.map((a)=>(
                    <tr>
                        <td>{a.id}</td>
                        <td>{a.nombre}</td>
                        <td>{a.detalles}</td>
                        <td>
                            <button onClick={()=>eliminarMetodo(a.id)}>eliminar</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
)

}
export default Metodos;