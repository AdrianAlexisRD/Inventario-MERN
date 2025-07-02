import { createContext, useReducer, useState } from "react";

const Autetificacion = createContext();

const AutetificacionProviderWrapper = ({children}) => {
    const [ datosLogin , setDatosLogin] = useState({})
    const [userON , dispatch] = useReducer(autentificacion, null)
    const [tipoAcceso , setTipoAcceso] = useReducer(tiposDeAcceso, null)
    const [valorDeStcok , setValorSctock] = useState(null)
    const [actualizar , setActualizar] = useState('')
    const [updated_id , setUpdated_id] = useState('')
    const [updated_name , setUpdated_name] = useState('')
 


 return(
    <Autetificacion.Provider value={
        {
        datosLogin , 
        setDatosLogin ,
        userON ,
        dispatch, 
        setActualizar, 
        actualizar,
        updated_id,
        setUpdated_id,
        updated_name,
        setUpdated_name,
        tipoAcceso,
        setTipoAcceso,
        valorDeStcok,
        setValorSctock,
          }}>
        {children}
    </Autetificacion.Provider>
 )}

export {Autetificacion , AutetificacionProviderWrapper};

const autentificacion = (state, action)=>{
    switch(action.type){
        case 'SET_VALUE': return action.payload;
        case 'RESET': return null ;
        default : return state ; 
    }   
};

const tiposDeAcceso = (state, action)=>{
    switch(action.type){
        case 'SET_VALUE': return action.payload;
        case 'RESET': return null ;
        default : return state ; 
    }
}