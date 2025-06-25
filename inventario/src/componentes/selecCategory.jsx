import {  useContext } from "react"
import { MostrarContext } from "../contexts/mostrar.producto";


const SelectCategoria = ({datos}) =>{
    const { setNameCate } = useContext(MostrarContext);

    const handleSelect = (e) =>{
        const valorSelect = e.target.value
        setNameCate(valorSelect)
    }

  const  categorias = []
  datos.map(Element =>{
    categorias.push(Element.category)
  })

  const categoriaFiltrada = [...new Set(categorias)]

   console.log(categoriaFiltrada)

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