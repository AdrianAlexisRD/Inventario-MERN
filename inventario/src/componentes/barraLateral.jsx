import {  useContext, useState } from "react"
import { MostrarContext } from "../contexts/mostrar.producto";
import { IconSelect , IconChevronCompactLeft, IconChevronCompactRight ,IconStack3,IconEdit  } from '@tabler/icons-react';


const Barra =({actualizar: modificar})=>{
  
    const { setMostrarCont } = useContext(MostrarContext);
    const [icon , setIcon] = useState(true)

  const cambiar = () => icon?setIcon(false):setIcon(true)
  


  return(
      <div className={`${icon?'w-[50px]':'w-[180px]'} barra style-barra z-20 Modo-Dark shadow-xl/30`}>
          
        <button onClick={cambiar} className={`absolute right-0 text-fuchsia-500 `}>
          {icon?
          <IconChevronCompactRight stroke={2} size={40} stroke-width="3" /> :
          <IconChevronCompactLeft stroke={2} size={40} stroke-width="3" /> 

          }
        </button>

          <button onClick={()=> setMostrarCont("main")}
              className={`${modificar=='actualizar'? 'btn-barra':'btn-barra mt-12' }`}>
                      
              <IconStack3 stroke={2} size={40} stroke-width="3" className=" text-color overflow-visible  " />
              <p className='overflow-hidden'>inventario</p>
          </button>

          <button 
          onClick={()=> setMostrarCont("crear")} 
          className="btn-barra"
          > <IconSelect stroke={2} size={40} stroke-width="3" className=" text-color overflow-visible"/>
            <p className='overflow-hidden'>Crear</p>
          </button>

          <button 
          onClick={()=> setMostrarCont("actualizar")} 
          className="btn-barra"
          > <IconEdit stroke={2} size={40} stroke-width="3" className=" text-color overflow-visible"/>
            <p className='overflow-hidden'>Modificar</p>
            
          </button>
        
      </div>
    )
}

export default Barra ;