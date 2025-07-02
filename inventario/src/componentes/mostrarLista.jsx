import { 
    IconHome , IconBolt ,
     IconToolsKitchen3 , IconShirt ,
    IconBox , IconCurrencyDollar,
    IconStack2, IconCategory, 
    IconFileDescription, IconCalendar 
    } from '@tabler/icons-react';
import { Autetificacion } from '../contexts/Conectar.Login';
import { useContext } from 'react';
import BtnDelete from './btnDelete';


export default function ViewList({datos}){

const {  updated_id ,  setUpdated_id , setUpdated_name,  setValorSctock } = useContext(Autetificacion)

  return(
    <ul className="grid grid-cols-1 gap-5 items-start style-barra md:w-[600px] xl:w-fit h-[700px] w-[90%] overflow-auto Modo-Dark mb-7 shadow-xl/30 aparecer">
      <li className='grid sm:grid-cols-6 border-b-2 text-[20px] w-350 h-fit p-2 color-primario font-bold'>
        <p className='flex items-center justify-center'>Nombre Producto</p>
        <p className='flex items-center sm:justify-center'>Stock</p>
        <p className="flex gap-2 items-center">Categoria</p>
        <p className="flex gap-2 items-center">Descripcion</p>
        <p className="flex gap-2 items-center sm:justify-center">Precio</p>
        <p className="flex gap-2 items-center">Fecha</p>
      </li>
      { datos.map((elemento, index) =>(
      <li key={index}      
       onClick={(e)=>{ 
        setUpdated_id(e.currentTarget.dataset.id) 
        setUpdated_name(e.currentTarget.dataset.name)
        setValorSctock(e.currentTarget.dataset.stock)
      }} data-id={elemento._id} data-name={elemento.name} data-stock={elemento.stock} className={
        `grid sm:grid-cols-6 border-b-2 
        ${updated_id == elemento._id && 'dark:bg-[#e7e5ea] bg-[#121212] dark:text-black text-white rounded-2xl '}
         border-white hover:cursor-pointer 
        shadow-2xs w-350 
        p-4  md:text-center relative`} >
          <BtnDelete  id={elemento._id} />
          <p className="color-secundario font-bold text-[18px] flex gap-2 items-center"><IconBox stroke={2} className='overflow-visible'/>{elemento.name}</p>
          <p className="flex gap-2 items-center sm:justify-center"><IconStack2 stroke={2} className='overflow-visible'/>{elemento.stock}</p>
          <p className="flex gap-2 items-center"><IconCategory stroke={2} className='overflow-visible'/>{elemento.category}</p>
          <p className="flex gap-2 items-center"><IconFileDescription stroke={2} className='overflow-visible'/>{elemento.description}</p>
          <p className="flex gap-2 items-center sm:justify-center"><IconCurrencyDollar stroke={2} className='overflow-visible'/>{elemento.price}</p>
          <p className="flex gap-2 items-center "><IconCalendar stroke={2} className='overflow-visible'/>{elemento.createdAt} </p>
      </li> 
      ))}
    </ul>
  )
}