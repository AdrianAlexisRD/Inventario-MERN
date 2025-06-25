import { 
    IconHome , IconBolt ,
     IconToolsKitchen3 , IconShirt ,
    IconBox , IconCurrencyDollar,
    IconStack2, IconCategory, 
    IconFileDescription, IconCalendar 
    } from '@tabler/icons-react';
import BtnDelete from './btnDelete';

export default function Card ({datos}){
 
const icons = [
<IconHome stroke={2} size={80} className='bg-white dark:bg-[#121212] w-[100%] h-[100px] border-b-2 border-fuchsia-500 rounded-2xl p-3'/>, 
<IconBolt stroke={2} size={80} className='bg-white dark:bg-[#121212] w-[100%] h-[100px] border-b-2 border-fuchsia-500 rounded-2xl p-3'/>, 
<IconToolsKitchen3 stroke={2}size={80} className='bg-white dark:bg-[#121212] w-[100%] h-[100px] border-b-2 border-fuchsia-500 rounded-2xl p-3'/>,
<IconShirt stroke={2}size={80} className='bg-white dark:bg-[#121212] w-[100%] h-[100px] border-b-2 border-fuchsia-500 rounded-2xl p-3'/>
]

  const getIcon = (category) => {
    switch (category) {
      case 'Hogar':
        return icons[0];
      case 'Electronica':
        return icons[1];
      case 'Alimentos':
        return icons[2];
      case 'Ropa':
        return icons[3];
      default:
        return null;
    }
  };

  return(
    <>
    <ul className="flex flex-wrap justify-center p-5 mt-5 gap-2 Modo-Dark md:w-[90%] w-[600px] overflow-auto rounded border-2 border-fuchsia-400 ">
      { datos.map((elemento, index) =>(
      <li key={index} className=" dark:bg-[#3f384c] mb-2 items-center rounded-2xl w-[210px] sm:w-[260px] border-2 border-fuchsia-500 relative hover:opacity-80 transition-all ease-in- duration-300 ">
        <BtnDelete  id={elemento._id} />
        {getIcon(elemento.category)}
        <div className='flex flex-col items-center gap-5 pb-2 mt-5 '>
          <p className='card-line'><IconBox stroke={2} className='overflow-visible'/>{elemento.name}</p>
          <p className='card-line'><IconStack2 stroke={2} className='overflow-visible'/>{elemento.stock}</p>
          <p className='card-line'><IconCategory stroke={2} className='overflow-visible'/>{elemento.category}</p>
          <p className='card-line'><IconFileDescription stroke={2} className='overflow-visible'/>{elemento.description}</p>
          <p className='card-line'><IconCurrencyDollar stroke={2} className='overflow-visible'/>{elemento.price}</p>
          <p className='card-line'><IconCalendar stroke={2} className='overflow-visible'/>{elemento.createdAt} </p>
        </div>
      </li> 
    ))}
    </ul>
        </>
    )


}