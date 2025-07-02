import {Link} from 'react-router-dom'
import { useContext } from "react"
import { Autetificacion } from "../contexts/Conectar.Login"
import BtnLogout from './logout'
import { IconPackage, IconUser } from '@tabler/icons-react'
import ModoDark from './modoDark'

const Header = ()=>{

    const {userON, tipoAcceso} = useContext(Autetificacion)
    
    return (
        <header className='flex justify-around flex-wrap items-center dark:bg-[#121212] bg-[#e7e5ea] h-fit w-[100vw] sm:p-5 p-10 text-2xl flex-col sm:flex-row'> 
            <h1 className="flex gap-2 text-[30px] text-white ">
                <IconPackage className='dark:text-white color-primario' size={52} stroke={2} />
                <Link className='font-extrabold dark:text-white color-primario' to='/'>StockMaster</Link></h1>
            <ul className="flex gap-5 sm:mt-0 mt-6 items-center justify-center flex-wrap">
                {userON && <li className=' pr-4  text-transparent font-bold bg-clip-text color-primario flex items-end gap-2'> <IconUser stroke={2} size={40} /> <h2 className=''>{tipoAcceso}:{userON}</h2></li>}
                <li className=' pr-4 gradient-text-shadow'>
                    <Link className='text-transparent color-primario font-bold' to='/'>Home</Link>
                </li>
                
                {!userON && <li className=' gradient-text-shadow'><Link className='text-transparent font-bold color-primario' to='/Login'>Login</Link></li>}
                {userON && <li className=' pr-4 border-fuchsia-500 gradient-text-shadow font-bold'><Link className='text-transparent bg-clip-text color-primario' to='/listaDeArticulos'>Inventario</Link></li>}
                {userON && <BtnLogout />}
                <ModoDark/>
            </ul>
        </header>
    )
}

export default Header ;