import  { useContext, useEffect,  useRef,  useState } from "react";
import { MostrarContext } from "../contexts/mostrar.producto";
import { Autetificacion } from '../contexts/Conectar.Login';
import SelectCategoria from "./selecCategory";
import { IconSearch,IconBaselineDensityLarge, IconId} from '@tabler/icons-react';
import Card from "./mostrarCard";
import ViewList from "./mostrarLista";
import ExportarCSV from "./descargarCsv";
// import LinesChart from './graficos'

import axios from 'axios';

const Mostrar =  ()=>{
  const [datos, setDatos]= useState([])
  const{nameCate } = useContext(MostrarContext)
  const { actualizar} = useContext(Autetificacion);
  const [buscarNombre , setBuscarNombre] = useState('')
  const buscarPorCategoria = `category=${nameCate}`
  const producto = useRef('')
  const [changeView , setChangeView] = useState(true)
  const list = () => setChangeView(true)
  const card = () => setChangeView(false)

 

  const hadlerBusqueda = e => {
    e.preventDefault()
    setBuscarNombre(producto.current.value)
  }
useEffect(()=>{
  const callInventario = async ()=>{
    
  try {
    const res = await axios.get(`http://localhost:5002/api?${buscarPorCategoria}&name=${buscarNombre}`)
  
    setDatos(res.data)
  } catch (error) {
        console.error('Error:', error.message);
  };
};
callInventario() 

}, [buscarNombre, buscarPorCategoria, actualizar])


return (
    
    <section className="flex flex-col items-center justify-self-center   text-black md:w-[90%] md:max-w-fit w-[90%] animacion pb-12">
        
        <div className="flex flex-wrap justify-center items-center style-barra Modo-Dark gap-5 w-fit  h-fit m-[20px] md:max-w-fit p-5 shadow-xl/30">
          <ExportarCSV datos={datos}/>
          <SelectCategoria datos={datos} />
            <form onSubmit={hadlerBusqueda} className=' flex flex-row justify-center items-center w-fit relative'>
                <input type="text"ref={producto} className='min-w-[250px] h-9 bg-white rounded static border-color text-black'  placeholder="nombre del articulo"/>
                <button type="submit" className="absolute right-0.5 p-0.5 rounded">
                <IconSearch type="submit" stroke={2} size={30} stroke-width="3" className='color-primario '/>
                </button>
            </form>
          <div className="flex gap-4">
            <IconId stroke={2} size={40} onClick={card} stroke-width="3" className="btn-br-horizontal  " />
            <IconBaselineDensityLarge stroke={2} size={35} stroke-width="3" onClick={list} className="btn-br-horizontal "/>
          </div>
        </div>      
          {!datos.length == 0 ? (changeView? <ViewList datos={datos} className/> :<Card datos={datos} />) : <h2 className="dark:text-[#3B82F6] color-primario text-2xl text-center">No hay producto para mostrar</h2>}
          
          {/* <LinesChart/> */}
    </section>
)};

export default  Mostrar;


