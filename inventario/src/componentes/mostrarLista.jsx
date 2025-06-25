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

const {  updated_id ,  setUpdated_id , setUpdated_name } = useContext(Autetificacion)

  return(
    <ul className="grid grid-cols-1 gap-5 style-barra md:w-[600px] xl:w-fit h-[700px] w-[90%] overflow-auto Modo-Dark mb-7 shadow-xl/30">
      { datos.map((elemento, index) =>(
      <li key={index}      
       onClick={(e)=>{ 
        setUpdated_id(e.currentTarget.dataset.id) 
        setUpdated_name(e.currentTarget.dataset.name)
      }} data-id={elemento._id} data-name={elemento.name} className={
        `grid sm:grid-cols-6 border-b-2 
        ${updated_id == elemento._id && 'dark:bg-[#e7e5ea] bg-[#121212] dark:text-black text-white rounded-2xl '}
         border-white hover:cursor-pointer 
        shadow-2xs md:w-400 h-fit 
        p-4  md:text-center relative`} >
          <BtnDelete  id={elemento._id} />
          <p className="text-fuchsia-500 font-bold text-[20px] flex gap-2 items-center"><IconBox stroke={2} className='overflow-visible'/>{elemento.name}</p>
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