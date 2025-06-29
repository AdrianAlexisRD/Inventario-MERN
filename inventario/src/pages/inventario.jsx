import Header from '../componentes/header'
import Barra from '../componentes/barraLateral'
import Mostrar from '../componentes/mostrarInventario'
import CreaArticulo from '../componentes/crearProducto';
import { MostrarContext } from '../contexts/mostrar.producto';
import { useContext } from 'react';
import { Autetificacion } from '../contexts/Conectar.Login';
import Login from './login';
import Modify from '../componentes/actualizarProducto';
import Liquidar from '../componentes/liquidarProduct'


const ListarArticulos = () => {
  const {mostrarCont} = useContext(MostrarContext)
  const {userON} = useContext(Autetificacion)
  
const Componente = () => {
  switch (mostrarCont) {
    case "main":
      return <Mostrar/>;
    case "crear":
      return <CreaArticulo />;
    case "actualizar":
      return <Modify/>;
    case "Liquidar":
      return <Liquidar/>;
    default:
      return <Mostrar/>;
  }
};

if(!userON) return <Login/>;

    return(
      <div className='flex flex-col items-center dark:bg-[#3f384c] bg-white h-[100vh] min-h-fit w-[100vw]'>
          <Header />
          <Barra modificar={mostrarCont} />
          {Componente()}        
      </div>
    )
}

export default ListarArticulos ;