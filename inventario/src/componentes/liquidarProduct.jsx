import axios from 'axios';
import {useContext,  useState, useEffect } from 'react';
import { Autetificacion } from '../contexts/Conectar.Login';
import Mostrar from './mostrarInventario';


export default function Liquidar (){

  const { setActualizar , updated_id , updated_name , tipoAcceso, userON, valorDeStcok }= useContext(Autetificacion)
  console.log(updated_name)
  const [articulo , setArticulo] = useState(
    { 
      name: updated_name, 
      proposito: '', 
      stock: '', 
      id_empleado: '', 
      empleado:`${tipoAcceso}: ${userON}`
    })
  const [exito , setExito] = useState('')
  const [manejarError , setError] = useState('')
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
  hitorialLiquidacion()
}

const handleChange = (e) => {
    const { name, value } = e.target;
  setArticulo((prev) => ({ ...prev, [name]: value }));

  };


  const hitorialLiquidacion =  async () =>{
    console.log(articulo )

    try{
        const res = await axios.post(`http://localhost:5002/api/liquidar`,
          articulo
        )
        const productoLiquidado = res.data
        console.log(productoLiquidado)
        if (res.status === 200) {
        setActualizar(articulo)
        liquidacion()
        setTimeout(() => setExito(''), 1000);
        setExito('!Se Actualizo correctamente!')
        }
    }catch(error){
      console.log( error)
        setTimeout(() => setError(''), 1000);
        setError('!Error al actualizar!')
    }
  }

  const liquidacion = async()=>{
    console.log(valorDeStcok)
    console.log({stock: parseFloat(valorDeStcok)-parseFloat(stock)})
    try{
    const res = await axios.patch(`http://localhost:5002/api/${updated_id}`,
    {stock:  parseFloat(valorDeStcok)-parseFloat(stock),
    empleado: 'supervisor'
    }
    )
    if(res.status === 200){
      console.log('se actualizo correctamente')
      console.log(res.data)
    }
    }catch(error){
        console.log(error)
    }
  }


  return(
    <div className="flex justify-center flex-col md:flex-row items-center md:items-start animacion">

      <div className='border-color w-[80%]  rounded md:w-[400px] p-1 mt-15 h-fit '>
        <form  className="style-form  relative md:h-fit " onSubmit={handleSubmit}>
          <h2 className="text-xl font-extrabold mb-6 color-primario">Liquidar Producto</h2>
          <h2 className='text-green-600 absolute z-20 top-11 '>{exito}</h2>
          <h2 className='text-red-600 absolute z-20 top-11 '>{manejarError}</h2>
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

            <label htmlFor='id_empleado' className="block mb-2 color-secundario  text-shadow-lg/10 font-extrabold">
            ID Empleado
            <input
              type="number"
              name="id_empleado"
              value={articulo.id_empleado}
              onChange={handleChange}
              className="style-input"
              
            />
          </label>
            <label htmlFor='proposito' className="block mb-2 color-secundario  text-shadow-lg/10 font-extrabold">
            Proposito
            <input
              type="text"
              name="proposito"
              value={articulo.proposito}
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