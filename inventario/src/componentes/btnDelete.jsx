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
      <div className='absolute left-[40%] dark:bg-[#121212]/80 bg-[#ffffff]/80 w-[300px] h-20 z-50 rounded-2xl flex justify-center items-center gap-2 border-color'>
        <button onClick={borraArticulo} className='bg-green-400 hover:bg-green-500 text-2xl rounded-2xl p-1 h-fit'>
          confirmar
        </button>
        <button onClick={()=>setBtnBorrar(false)} className='bg-red-400 hover:bg-red-500 text-2xl rounded-2xl p-1 h-fit'>
          cancelar
        </button>
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
