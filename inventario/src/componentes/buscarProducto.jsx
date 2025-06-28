import { IconSearch } from '@tabler/icons-react';

const BuscarArticulo = () =>{

  return(
    <div className=' 
      flex flex-row 
      justify-center 
      items-center 
      w-[200px] 
      relative'>
        <input type="text" className='
         w-[200px] h-9 bg-white 
          rounded border-2 static 
         border-color text-black
          active:bg-blue-400'  
          placeholder="Buscar..."/>
        <IconSearch stroke={2} className='color-primario z-20  absolute right-2'/>
    </div>
  )
}

export default BuscarArticulo ;