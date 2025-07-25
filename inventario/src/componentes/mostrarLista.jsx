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
    <ul className="grid grid-cols-1 content-start justify-center 
    style-barra  xl:w-fit h-[800px] w-[90%] overflow-auto 
    Modo-Dark mb-7 shadow-xl/30 aparecer items-start ">

      <li className='grid sm:grid-cols-7 border-b-2 text-[15px] h-fit p-2 color-primario font-extrabold sm:min-w-7xl'>
        <p className='flex items-center justify-center gap-2'>Nombre Producto </p>
        <p className='flex items-center sm:justify-center'>Stock</p>
        <p className="flex gap-2 items-center">Categoria</p>
        <p className="flex gap-2 items-center">Descripcion</p>
        <p className="flex gap-2 items-center sm:justify-center">Precio</p>
        <p className="flex gap-2 items-center">Fecha</p>
        <p className='flex items-center justify-center gap-2'>total: {datos.length }</p>
      </li>
      { datos.map((elemento, index) =>(
      <li key={index}      
       onClick={(e)=>{ 
        setUpdated_id(e.currentTarget.dataset.id) 
        setUpdated_name(e.currentTarget.dataset.name)
        setValorSctock(e.currentTarget.dataset.stock)
      }} data-id={elemento._id} data-name={elemento.name} data-stock={elemento.stock} className={
        `grid sm:grid-cols-7 border-b-3  
        ${elemento.stock == 0? 'bg-red-400 ' : `${updated_id == elemento._id && 'dark:bg-[#e7e5ea] bg-[#1c2029] dark:text-black text-white'}`}
         border-white hover:cursor-pointer 
        shadow-2xs  sm:min-w-7xl
        p-4  md:text-center text-[15px] `} >
          <p className={`${!elemento.stock?'text-white':'color-secundario'} font-bold text-[17px] flex gap-2 items-center`}>{elemento.name}</p>
          <p className="flex gap-2 items-center sm:justify-center"><IconStack2 stroke={2} className='overflow-visible'/>{elemento.stock}</p>
          <p className="flex gap-2 items-center"><IconCategory stroke={2} className='overflow-visible'/>{elemento.category}</p>
          <p className="flex gap-2 items-center p-2"><IconFileDescription stroke={2} className='overflow-visible'/>{elemento.description}</p>
          <p className="flex gap-2 items-center sm:justify-center"><IconCurrencyDollar stroke={2} className='overflow-visible'/>{elemento.price}</p>
          <p className="flex gap-2 items-center "><IconCalendar stroke={2} className='overflow-visible'/>{elemento.createdAt} </p>
          <BtnDelete  id={elemento._id} />
      </li> 
      ))}
    </ul>
  )
};  