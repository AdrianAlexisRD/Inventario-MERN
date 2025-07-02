// import axios from 'axios';
import {useContext,  useState, useEffect } from 'react';
import { Autetificacion } from '../contexts/Conectar.Login';
import Mostrar from './mostrarInventario';
import ListaParaLiquidar from './listaALiquidar';


export default function Liquidar (){

  const { updated_id , updated_name , tipoAcceso, userON }= useContext(Autetificacion)
  console.log(updated_name)
  const [articulo , setArticulo] = useState(
    { 
      name: updated_name, 
      nota: '', 
      stock: '', 
      id_empleado: '', 
      empleado:`${tipoAcceso}: ${userON}`
    })
  // const [exito , setExito] = useState('')
  // const [manejarError , setError] = useState('')
  const {stock} = articulo  

    useEffect(() => {
    if (updated_name) {
      setArticulo((prev) => ({
        ...prev,
        name: updated_name
      }));
    }
  }, [updated_name]);



const handleSubmit = async (e) => {
  e.preventDefault();
  // hitorialLiquidacion()
}

const handleChange = (e) => {
    const { name, value } = e.target;
  setArticulo((prev) => ({ ...prev, [name]: value }));

  };




  

  return(
    <div className="flex justify-center flex-col md:flex-row items-center md:items-start animacion  ">

      <div className=' w-[80%]  rounded md:w-[400px] p-1  mt-5 h-fit '>
        <form  className="style-form   md:h-fit border-color shadow-xl/50 " onSubmit={handleSubmit}>
          <h2 className="text-xl font-extrabold mb-6 color-primario">Liquidar Producto</h2>

          <label htmlFor='name' className="block mb-2 color-secundario text-shadow-lg/10 font-extrabold">
            Nombre articulo
            <input
              type="text"
              name="name"
              value={updated_name}
              onChange={handleChange}
              className="style-input"
              readOnly 
            />
            </label>
            <label htmlFor='nota' className="block mb-2 color-secundario  text-shadow-lg/10 font-extrabold">
            Nota
            <textarea
              type="text"
              name="nota"
              value={articulo.nota}
              onChange={handleChange}
              className="style-input"            
            />
            </label>

            <label htmlFor='stock' className="block mb-2 color-secundario  text-shadow-lg/10 font-extrabold">
            Cantidad
            <input
              type="number"
              name="stock"
              value={articulo.stock}
              onChange={handleChange}
              className="style-input"
            
            />
          </label>

          
        </form>
        <ListaParaLiquidar producto={ {name:updated_name , _id: updated_id , sacarDeStock: stock }} articulo={articulo} />
    </div>
    <div className='md:w-[65%]'>
      <Mostrar />
    </div>
    
    </div>   
  )
}