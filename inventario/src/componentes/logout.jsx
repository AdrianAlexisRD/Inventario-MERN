import { useContext } from "react"
import { Autetificacion } from "../contexts/Conectar.Login"
import { Link } from "react-router-dom"

const BtnLogout = () =>{
const {dispatch, setTipoAcceso} = useContext(Autetificacion)
const cambiarStado = () => {
  dispatch({type: 'RESET'})
  setTipoAcceso({type: 'RESET'})
}

    return(
        <button onClick={cambiarStado} className='gradient-text-shadow'>
          <Link className="text-transparent bg-clip-text color-primario font-bold" to='/'>Logout</Link>
        </button>
    )
}

export default BtnLogout ;