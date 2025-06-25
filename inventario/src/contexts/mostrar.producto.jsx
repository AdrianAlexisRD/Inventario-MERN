import { createContext, useState } from "react";



const MostrarContext = createContext();

function ArticulosProviderWrapper({children}) {
  const [nameCate , setNameCate] = useState('')
  const [mostrarCont , setMostrarCont] = useState('')
 



  return(
    <MostrarContext.Provider value={{
      nameCate, 
      setNameCate, 
      mostrarCont , 
      setMostrarCont,
      }}>
      {children}  
    </MostrarContext.Provider>
  )

  }

export {MostrarContext, ArticulosProviderWrapper };