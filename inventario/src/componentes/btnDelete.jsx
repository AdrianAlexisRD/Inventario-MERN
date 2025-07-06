import {   IconCopyX  } from '@tabler/icons-react';
import axios from 'axios';
import { useContext, useState } from 'react';
import { Autetificacion } from '../contexts/Conectar.Login';



export default function BtnDelete({ id }) {
  const [info, setInfo] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { setActualizar, tipoAcceso } = useContext(Autetificacion)
  const [btnBorrar , setBtnBorrar] = useState(false)


  const borraArticulo = async (e) => {
    e.preventDefault();
    setBtnBorrar(false) 
    setIsLoading(true);
    
    try {
      const res = await axios.delete(`http://localhost:5002/api/${id}`); 
      if (res.status === 200) {
        setActualizar(id)
      }
    } catch (error) {
      console.error('Error al eliminar:', error);
      setInfo('¡Error al eliminar!');
      setTimeout(() => setInfo(''), 3000);
      setBtnBorrar(false)
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex justify-center  ">
      {btnBorrar&&
      <div className='absolute left-[40%] dark:bg-[#121212] font-extrabold p-4 bg-[#ffffff] w-fit h-fit  z-50 rounded-2xl flex justify-center flex-col gap-2 border-color'>
        <h2 className='text-[#1E3A8A] text-[20px]'>seguro que desear borrar este elemento</h2>

        <div className='flex justify-center items-center gap-3'>
          <button onClick={borraArticulo} className='bg-green-400 hover:bg-green-500 text-[18px] rounded-2xl p-1 h-fit'>
          confirmar
        </button>
        <button onClick={()=>setBtnBorrar(false)} className='bg-red-400 hover:bg-red-500 text-[18px] rounded-2xl p-1 h-fit'>
          cancelar
        </button>
        </div>

      </div>}
      {info &&  (<h3 className='text-red-500' >{info}</h3>)}
      { (tipoAcceso === 'supervisor' && !btnBorrar) &&
      <button 
        onClick={()=>setBtnBorrar(true)}
        disabled={isLoading}
        aria-label="Eliminar artículo"
      >
        {!info &&< IconCopyX  
          className={`hover:text-red-500 active:scale-[0.80] ${isLoading ? 'opacity-50 cursor-not-allowed': 'cursor-pointer'}`} 
          stroke={2} 
          size={30} 
        />}
      </button>}
    </div>
  );
}
