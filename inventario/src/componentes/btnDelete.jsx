import {   IconCopyX  } from '@tabler/icons-react';
import axios from 'axios';
import { useContext, useState } from 'react';
import { Autetificacion } from '../contexts/Conectar.Login';



export default function BtnDelete({ id }) {
  const [info, setInfo] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { setActualizar, tipoAcceso } = useContext(Autetificacion)


  const borraArticulo = async (e) => {
    e.preventDefault(); 
    setIsLoading(true);
    
    try {
      const res = await axios.delete(`http://localhost:5002/api/${id}`); 
      if (res.status === 200) {
        setActualizar(id)
        setTimeout(() => setInfo(''), 1000);
      }
    } catch (error) {
      console.error('Error al eliminar:', error);
      setInfo('¡Error al eliminar!');
      setTimeout(() => setInfo(''), 3000);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="absolute right-2 top-2">

      {info && (<h3 className='text-red-500' >{info}</h3>)}
      { tipoAcceso === 'supervisor' &&
      <button 
        onClick={borraArticulo}
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
