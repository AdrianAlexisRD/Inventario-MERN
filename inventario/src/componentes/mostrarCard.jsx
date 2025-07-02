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
<IconHome stroke={2} size={80} className='bg-white dark:bg-[#121212] w-[30%] h-[100%] border-r-2 border-[#1E3A8A] rounded-2xl '/>, 
<IconBolt stroke={2} size={80} className='bg-white dark:bg-[#121212] w-[30%] h-[100%] border-r-2 border-[#1E3A8A] rounded-2xl '/>, 
<IconToolsKitchen3 stroke={2}size={80} className='bg-white dark:bg-[#121212] w-[30%] h-[100%] border-r-2 border-[#1E3A8A] rounded-2xl '/>,
<IconShirt stroke={2}size={80} className='bg-white dark:bg-[#121212] w-[30%] h-[100%] border-r-2 border-[#1E3A8A] rounded-2xl '/>,
<IconBox stroke={2}size={80} className='bg-white dark:bg-[#121212] w-[30%] h-[100%] border-r-2 border-[#1E3A8A] rounded-2xl '/>

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
        return icons[4];
    }
  };

  return(
    <>
    <ul className="flex flex-wrap justify-center md:p-5 p-2 mt-5 gap-2 Modo-Dark md:w-[90%] w-[400px] overflow-auto rounded border-2 border-[#1E3A8A] aparecer mb-8">
      { datos.map((elemento, index) =>(
      <li key={index} className="flex dark:bg-[#3f384c] md:mb-2 items-center rounded-2xl w-[100%] sm:w-[400px] border-2 border-[#1E3A8A] relative hover:opacity-80">
        {/* <BtnDelete  id={elemento._id} /> */}
        {getIcon(elemento.category)}
        <div className='flex flex-col items-center pb-2 md:w-[90%] '>
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