import axios from "axios";
import { useContext, useState } from "react";
import { Autetificacion } from "../contexts/Conectar.Login";
import Mostrar from './mostrarInventario';

const CreaArticulo = ()=>{
const {userON , setActualizar , tipoAcceso}= useContext(Autetificacion)
const [creado , setCreado] = useState('')
const [mostrarError , setMostrarError] = useState('')
const [articulo , setArticulo]= useState({
    user: userON ,
    name: '',
    price: '',
    description: '',
    category: '',
    stock: '',
    empleado: tipoAcceso
})


const hacerPost = async () =>{
  try{
    const res = await axios.post(`http://localhost:5002/api`, articulo)
    setArticulo(
      { user: userON,

        name: '', 
        price: '', 
        description: '', 
        category: '', 
        stock: '' 
      });
      if(res.status == 201){
        console.log('articulo creado')
        setCreado('tarea creada exitosamente')
        setActualizar(articulo.name)
      }
  }catch(e){
    setMostrarError(e.response.data.error)
    console.log(e.response.data.error)
  }

};

const handleSubmit = async (e) => {
  e.preventDefault();
  hacerPost()
};

  const handleChange = (e) => {
    const { name, value } = e.target;
    setArticulo((e) => ({ ...e,[name]: value,}));
    console.log({ ...e,[name]: value,})


  };


  return (
    <div className="flex justify-center flex-col md:flex-row md:ml-15 animacion">

    <div className="flex justify-center h-fit  ">


 
      <form  className="style-form style-barra border-2 mt-5 color-primario max-w-120  " onSubmit={handleSubmit}>
        <h2 className="text-[26px] font-extrabold mb-3 color-secundario ">Crear producto</h2>
        <div className=" text-[15px] ">
          {creado? <h2 className="text-green-500 ">{creado}</h2> : <h2 className="text-red-500 ">{mostrarError}</h2>}
          
          
        </div>

        <label htmlFor='name' className="block mb-2 dark:text-[#3B82F6] text-shadow-lg/10 font-extrabold">
          Nombre articulo
          <input
            type="text"
            name="name"
            value={articulo.name}
            onChange={handleChange}
            className="style-input"
            required
          />
          </label>

          <label htmlFor='price' className="block mb-2 dark:text-[#3B82F6] text-shadow-lg/10 font-extrabold">
          price
          <input
            type="number"
            name="price"
            value={articulo.price}
            onChange={handleChange}
            className="style-input"
            required
          />
        </label>
          <label htmlFor='descripcion' className="block mb-2 dark:text-[#3B82F6] text-shadow-lg/10 font-extrabold">
          descripcion
          <input
            type="text"
            name="description"
            value={articulo.description}
            onChange={handleChange}
            className="style-input"
            required
          />
          </label>
          <label htmlFor='categoria' className="block mb-2 dark:text-[#3B82F6] text-shadow-lg/10 font-extrabold">
              Categoria
              <input
                type='text'
                name="category" 
                value={articulo.category} 
                onChange={handleChange} 
                className="style-input "
              />
              </label>
      
          <label htmlFor='stock' className="block mb-2 dark:text-[#3B82F6] text-shadow-lg/10 font-extrabold">
          Cantidad
          <input
            type="number"
            name="stock"
            value={articulo.stock}
            onChange={handleChange}
            className="style-input"
            required
          />
        </label>

        <div className='flex justify-center gap-5'>
          <button type="submit" className="style-btn">
            Submit
          </button>

        </div>
      </form>
    </div>
      <div className="md:w-[75%]">
        <Mostrar /> 
      </div>
      </div>
  )
}

export default CreaArticulo ;