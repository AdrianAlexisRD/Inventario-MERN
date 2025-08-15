import { useContext } from "react"
import { Autetificacion } from "../contexts/Conectar.Login"
import { Link } from "react-router-dom"
import { IconLogout } from '@tabler/icons-react';


const BtnLogout = () =>{
const {dispatch, setTipoAcceso} = useContext(Autetificacion)
const cambiarStado = () => {
  dispatch({type: 'RESET'})
  setTipoAcceso({type: 'RESET'})
}

    return(
        <button onClick={cambiarStado} className='gradient-text-shadow'>
          <Link className="text-transparent bg-clip-text color-primario font-bold" to='/'><IconLogout size={40} /></Link>
        </button>
    )
}

export default BtnLogout ;