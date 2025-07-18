import { createContext, useState } from "react";



const MostrarContext = createContext();

function ArticulosProviderWrapper({children}) {
  const [nameCate , setNameCate] = useState('')
  const [mostrarCont , setMostrarCont] = useState('')
  const [categorias , setCategorias] = useState([])
 



  return(
    <MostrarContext.Provider value={{
      nameCate, 
      setNameCate, 
      mostrarCont , 
      setMostrarCont,
      categorias,
      setCategorias
      }}>
      {children}  
    </MostrarContext.Provider>
  )

  }

export {MostrarContext, ArticulosProviderWrapper };