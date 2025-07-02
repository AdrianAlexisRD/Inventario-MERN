import {  useContext, useState } from "react"
import { MostrarContext } from "../contexts/mostrar.producto";
import {Autetificacion} from "../contexts/Conectar.Login"
import { IconSelect ,
  IconChevronCompactLeft, 
  IconChevronCompactRight ,
  IconStack3,
  IconEdit,
  IconArrowsRightLeft,
  IconListDetails 
  } from '@tabler/icons-react';


const Barra =({actualizar: modificar})=>{
  
  const { setMostrarCont } = useContext(MostrarContext);
  const { tipoAcceso } = useContext(Autetificacion)

  const [icon , setIcon] = useState(true)

  const cambiar = () => icon?setIcon(false):setIcon(true)
  


  return(
      <div className={`${icon?'md:w-[50px] ':'md:w-[180px]'} barra shadow-[0_35px_35px_rgba(0,0,0,0.25)] z-20 Modo-Dark shadow-xl/30 mt-0 transition-all duration-500 ease-in-out`}>
          
        <button onClick={cambiar} className={`md:absolute right-0 color-primario hidden md:flex `}>
          {icon?
            <IconChevronCompactRight stroke={2} size={40} strokeWidth="3" /> :
            <IconChevronCompactLeft stroke={2} size={40} strokeWidth="3" /> 
          }
        </button>

          <button onClick={()=> setMostrarCont("main")}
              className={`${modificar ==='actualizar'? 'btn-barra ':'btn-barra md:mt-12 ' } ${icon?'md:w-[50px] ':'md:w-[180px]'} transition-all duration-500 ease-in-out hover:w-[180px] w-[50px]`}>        
              <IconStack3 stroke={2} size={40} strokeWidth="3" className=" overflow-visible  " />
              <div></div>
              <p className='text-barra'>inventario</p>
          </button>

          {tipoAcceso === 'supervisor' &&
            <button 
            onClick={()=> setMostrarCont("crear")} 
            className={`btn-barra ${icon?'md:w-[50px]  ':'md:w-[180px]'} transition-all duration-500 ease-in-out hover:w-[180px] w-[50px] `}
            > <IconSelect stroke={2} size={40} strokeWidth="3" className=" overflow-visible"/>
              <p className='text-barra'>Crear</p>
            </button>
          }

          {tipoAcceso === 'supervisor' &&
            <button 
            onClick={()=> setMostrarCont("actualizar")} 
            className={`btn-barra ${icon?'md:w-[50px] ':'md:w-[180px]'} transition-all duration-500 ease-in-out hover:w-[180px] w-[50px] `}
            > <IconEdit stroke={2} size={40} strokeWidth="3" className=" text-color overflow-visible"/>
              <p className='text-barra'>Modificar</p>         
            </button>
          }

          <button 
            onClick={()=> setMostrarCont("Liquidar")} 
            className={`btn-barra ${icon?'md:w-[50px] ':'md:w-[180px]'} transition-all duration-500 ease-in-out hover:w-[180px] w-[50px] `}> 
            <IconArrowsRightLeft stroke={2} size={40} strokeWidth="3" className=" text-color overflow-visible"/>
            <p className='text-barra'>Liquidar</p>         
          </button>
          <button 
            onClick={()=> setMostrarCont("Historial")} 
            className={`btn-barra ${icon?'md:w-[50px] ':'md:w-[180px]'} transition-all duration-500 ease-in-out hover:w-[180px] w-[50px] `}> 
            <IconListDetails  stroke={2} size={40} strokeWidth="3" className=" text-color overflow-visible"/>
            <p className='text-barra'>Historial</p>         
          </button>
        
      </div>
    )
}

export default Barra ;