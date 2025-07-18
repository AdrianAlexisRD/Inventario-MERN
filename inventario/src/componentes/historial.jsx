import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { Autetificacion } from '../contexts/Conectar.Login';

export default function Historial (){
    const [data , setData] = useState([])
      const { actualizar }= useContext(Autetificacion)
    

    const buscarHistorial = async ()=>{
        try {
            const res = await axios.get('http://localhost:5002/api/liquidar', actualizar)
            const data = await res.data
            setData(data)
            console.log(data)
        } catch (error) {
            console.log(error)
        }
    }

   useEffect(()=>{
    buscarHistorial()
   }, [actualizar])

    return(
        <div className='animacion mb-12'>
            <h2 className='text-center mt-7 text-3xl font-extrabold color-secundario text-shadow-2xs text-shadow-black'>Hitorial de productos liquidados</h2>
        <ul className="grid grid-cols-1 style-barra md:w-[600px] xl:w-fit h-[700px] w-[90%] overflow-auto Modo-Dark shadow-xl/30 aparecer mt-10 items-start ">
            <li className='grid sm:grid-cols-4 border-b-2 text-[20px] h-12 color-primario font-bold'>
                <p className='flex items-center sm:justify-center'>Empleado</p>
                <p className="flex items-center sm:justify-center">Stock removido</p>
                <p className="flex items-center sm:justify-center">nota</p>
                <p className='flex items-center sm:justify-center'>Fecha</p>
            </li>
              { data.map((element, index) =>(
              <li key={index} className={
                `grid sm:grid-cols-4 border-b-2 
                 dark:border-white hover:cursor-pointer 
                shadow-2xs w-350 
                 md:text-center p-3
                 border-[#121212]
                 `} >
                    <p className='flex items-center sm:justify-center text-[18px] font-bold '>{element.empleado}</p>
                    <ul>
                    {element.liquidado.map((elemento, index) =>(
                        <li className='flex items-center justify-between text-[15px]'>
                            <p className=''>{index + 1} {elemento.name} :</p>
                            <p className=''>{elemento.sacarDeStock}</p>
                        </li>
                    ))}
                    </ul>
                    <p className='flex items-center sm:justify-center text-[15px] font-bold'>{element.nota}</p>
                    <p className='flex items-center sm:justify-center text-[15px] font-bold'>{element.createdAt}</p>
                </li>
              ))}
        </ul>
    </div>
    )
}