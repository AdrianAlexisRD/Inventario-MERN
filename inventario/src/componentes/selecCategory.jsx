import { MostrarContext } from "../contexts/mostrar.producto";
import  { useContext, useEffect,  useState } from "react";
import axios from 'axios';
import { Autetificacion } from '../contexts/Conectar.Login';


const SelectCategoria = () =>{
  const { setNameCate , setCategorias } = useContext(MostrarContext);
  const { actualizar } = useContext(Autetificacion);
  const [datos , setDatos] = useState([])



  useEffect(()=>{
  const callInventario = async ()=>{

    try {
      const res = await axios.get(`http://localhost:5002/api`)
      console.log(res.data)
      setDatos(res.data)
    } catch (error) {
          console.error('Error:', error.message);
        }
  }
    callInventario() 
    }, [ actualizar ])

    const handleSelect = (e) =>{
        const valorSelect = e.target.value
        setNameCate(valorSelect)
    }

  const  categorias = []
  datos.map(Element =>{
    categorias.push(Element.category)
  });

  const categoriaFiltrada = [...new Set(categorias)]
  setCategorias(categoriaFiltrada )

    return(
    <select onChange={handleSelect} className="w-[200px] text-center h-9 bg-[#3B82F6]/[0.6] rounded font-extrabold border-color shadow-xl dark:ring ">
        <option  value="">Todas</option>
        {categoriaFiltrada.map((category , index) =>(
        <option key={index} value={category}>{category}</option> 
        ))}

    </select>
    )

};

export default SelectCategoria ;