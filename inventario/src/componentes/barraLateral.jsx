import {  useContext, useState } from "react"
import { MostrarContext } from "../contexts/mostrar.producto";
import { IconSelect , IconChevronCompactLeft, IconChevronCompactRight ,IconStack3,IconEdit  } from '@tabler/icons-react';


const Barra =({actualizar: modificar})=>{
  
    const { setMostrarCont } = useContext(MostrarContext);
    const [icon , setIcon] = useState(true)

  const cambiar = () => icon?setIcon(false):setIcon(true)
  


  return(
      <div className={`${icon?'md:w-[50px] ':'md:w-[180px]'} barra style-barra z-20 Modo-Dark shadow-xl/30 mt-0 transition-all duration-500 ease-in-out`}>
          
        <button onClick={cambiar} className={`md:absolute right-0 color-primario hidden md:flex `}>
          {icon?
          <IconChevronCompactRight stroke={2} size={40} stroke-width="3" /> :
          <IconChevronCompactLeft stroke={2} size={40} stroke-width="3" /> 

          }
        </button>

          <button onClick={()=> setMostrarCont("main")}
              className={`${modificar ==='actualizar'? 'btn-barra ':'btn-barra md:mt-12 ' } ${icon?'md:w-[50px] ':'md:w-[180px]'} transition-all duration-500 ease-in-out hover:w-[180px] w-[50px]`}>
                      
              <IconStack3 stroke={2} size={40} stroke-width="3" className=" overflow-visible  " />
              <div></div>
              <p className='overflow-hidden text-[#1E3A8A] dark:text-white text-[18px] font-bold'>inventario</p>
          </button>

          <button 
          onClick={()=> setMostrarCont("crear")} 
          className={`btn-barra ${icon?'md:w-[50px]  ':'md:w-[180px]'} transition-all duration-500 ease-in-out hover:w-[180px] w-[50px] `}
          > <IconSelect stroke={2} size={40} stroke-width="3" className=" overflow-visible"/>
            <p className='overflow-hidden  text-[#1E3A8A] dark:text-white text-[18px] font-bold '>Crear</p>
          </button>

          <button 
          onClick={()=> setMostrarCont("actualizar")} 
          className={`btn-barra ${icon?'md:w-[50px] ':'md:w-[180px]'} transition-all duration-500 ease-in-out hover:w-[180px] w-[50px] `}
          > <IconEdit stroke={2} size={40} stroke-width="3" className=" text-color overflow-visible"/>
            <p className='overflow-hidden  text-[#1E3A8A] text-[18px] dark:text-white font-bold'>Modificar</p>
            
          </button>
        
      </div>
    )
}

export default Barra ;