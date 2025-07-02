import axios from 'axios';
import { useState } from 'react';

export default function Historial (){
    const [data , setData] = useState([])

    const buscarHistorial = async ()=>{
        try {
            const res = await axios.get('http://localhost:5002/api/liquidar', "buscar")
            const data = await res.data
            setData(data)
            console.log(data)
        } catch (error) {
            console.log(error)
        }
    }

    buscarHistorial()

    return(
        <div>
        <ul className="grid grid-cols-1 style-barra md:w-[600px] xl:w-fit h-[700px] w-[90%] overflow-auto Modo-Dark shadow-xl/30 aparecer mt-10 items-start">
            <li className='grid sm:grid-cols-6 border-b-2 text-[20px] h-12 color-primario font-bold'>
                <p className='flex items-center justify-center'>Codigo empleado</p>
                <p className='flex items-center sm:justify-center'>Empleado</p>
                <p className='flex items-center sm:justify-center'>Nombre</p>
                <p className="flex items-center sm:justify-center">Descripcion</p>
                <p className="flex items-center sm:justify-center">Stock removido</p>
                <p className='flex items-center sm:justify-center'>Fecha</p>
            </li>
              { data.map((element, index) =>(
              <li key={index} className={
                `grid sm:grid-cols-6 border-b-2 
                 border-white hover:cursor-pointer 
                shadow-2xs w-350 
                 md:text-center `} >
                    <p className='flex items-center sm:justify-center'>{element.id_empleado}</p>
                    <p className='flex items-center sm:justify-center'>{element.empleado}</p>
                    <p className='flex items-center sm:justify-center'>{element.name}</p>
                    <p className='flex items-center sm:justify-center'>{element.proposito}</p>
                    <p className='flex items-center sm:justify-center'>{element.stock}</p>
                    <p className='flex items-center sm:justify-center'>{element.createdAt}</p>
                </li>
              ))}
        </ul>
    </div>
    )
}