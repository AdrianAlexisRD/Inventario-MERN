import axios from 'axios';
import {useContext,  useState,  } from 'react';
import { Autetificacion } from '../contexts/Conectar.Login';
import Mostrar from './mostrarInventario';


function Modify (){
  const { setActualizar , updated_id , updated_name }= useContext(Autetificacion)
  console.log(updated_name)
  const [articulo , setArticulo] = useState({ name: '', price: '', description: '', category: '', stock: ''})
  const [exito , setExito] = useState('')
  const [manejarError , setError] = useState('')
  

const handleSubmit = async (e) => {
  e.preventDefault();
  modificar()
}

const handleChange = (e) => {
    const { name, value } = e.target;
    setArticulo((e) => ({ ...e,[name]: value,}));
  };


  const modificar =  async () =>{
    console.log(updated_id , )
    const articuloFiltrado = Object.fromEntries(
    // eslint-disable-next-line no-unused-vars
    Object.entries(articulo).filter(([key , value]) => value !== '' && value !== null && value !== undefined)
  );

      try{
          const res = await axios.patch(`http://localhost:5002/api/${updated_id}`,
           articuloFiltrado
          )
          const datosUpdated = res.data
          console.log(datosUpdated)
          if (res.status === 200) {
          setActualizar(articulo)
          setArticulo(datosUpdated)
          setTimeout(() => setExito(''), 1000);
          setExito('!Se Actualizo correctamente!')
          }

      }catch(error){
        console.log('error al actualizar'+ error)
          setTimeout(() => setError(''), 1000);
          setError('!Error al actualizar!')
        
      }
  }




  return(
    <div className="flex justify-center flex-col md:flex-row items-center md:items-start animacion">

      <div className='border-color w-[90%]  rounded md:w-[400px] p-1 mt-15 h-fit '>
        <form  className="style-form  relative md:h-fit " onSubmit={handleSubmit}>
          <h2 className="text-xl font-bold mb-6 text-purple-500">Actualizar Articulo</h2>
          <h2 className='text-green-600 absolute z-20 top-11 '>{exito}</h2>
          <h2 className='text-red-600 absolute z-20 top-11 '>{manejarError}</h2>
          <label htmlFor='name' className="block mb-2">
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

            <label htmlFor='price' className="block mb-2">
            price
            <input
              type="text"
              name="price"
              value={articulo.price}
              onChange={handleChange}
              className="style-input"
              
            />
          </label>
                <label htmlFor='descripcion' className="block mb-2">
            descripcion
            <input
              type="text"
              name="description"
              value={articulo.description}
              onChange={handleChange}
              className="style-input"
              
            />
            </label>
            
            <label htmlFor='categoria' className="block mb-2">
            Categoria
            <input
              type='text'
              name="category" 
              value={articulo.category} 
              onChange={handleChange} 
              className="style-input "
            />
            </label>

        
                <label htmlFor='stock' className="block mb-2">
            Cantidad
            <input
              type="text"
              name="stock"
              value={articulo.stock}
              onChange={handleChange}
              className="style-input"
            
            />
          </label>

          <div className='flex justify-center gap-5'>
            <button type="submit" className="style-btn">
              Submit
            </button>

          </div>
        </form>
    </div>
    <div className='md:w-[65%] md:ml-10'>
      <Mostrar />
    </div>
    
    </div>
    
  )
}

export default (Modify);