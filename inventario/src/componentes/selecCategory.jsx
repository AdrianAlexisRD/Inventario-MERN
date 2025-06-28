import { MostrarContext } from "../contexts/mostrar.producto";
import  { useContext, useEffect,  useState } from "react";
import axios from 'axios';
import { Autetificacion } from '../contexts/Conectar.Login';


const SelectCategoria = () =>{
  const { setNameCate } = useContext(MostrarContext);
  const { userON , actualizar} = useContext(Autetificacion);
  const [datos , setDatos] = useState([])



  useEffect(()=>{
  const callInventario = async ()=>{

    try {
      const res = await axios.get(`http://localhost:5002/api?user=${userON}`)
      console.log(res.data)
      setDatos(res.data)
    } catch (error) {
          console.error('Error:', error.message);
        }
  }
    callInventario() 
    }, [ userON, actualizar])

    const handleSelect = (e) =>{
        const valorSelect = e.target.value
        setNameCate(valorSelect)
    }

  const  categorias = []
  datos.map(Element =>{
    categorias.push(Element.category)
  })

  const categoriaFiltrada = [...new Set(categorias)]

  //  console.log(categoriaFiltrada)

    return(
    <select onChange={handleSelect} className="w-[200px] text-center h-9 bg-[#121212]/[0.6] rounded font-extrabold border-color shadow-xl dark:ring ">
        <option  value="">Categoria</option>
        {categoriaFiltrada.map(category =>(
        <option  value={category}>{category}</option> 
        ))}

    </select>
    )

}

export default SelectCategoria ;