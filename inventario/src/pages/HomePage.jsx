import Header from "../componentes/header";
import { IconPackage, IconLock , IconReport  } from '@tabler/icons-react';
import BgHome from "../componentes/bg-home";
const Home = () => {
  return (
<div className="justify-center dark:bg-[#3f384c] bg-white">
  <Header />
  <BgHome/>
    <div className="flex flex-col md:flex-row md:gap-[50px] md:m-5 mt-10   items-center md:justify-center h-dvh  ">
      <div className="border-color p-1 mb-10 md:w-[50%] w-[90%]  ">
      <p className="md:text-[35px] Modo-Dark rounded p-2  ">
        Bienvenido a <span className="color-primario">StockMaster</span> Administra tu inventario de forma
        rápida, sencilla y organizada. Nuestro sistema te permite llevar el
        control total de tus productos, entradas, salidas y existencias en
        tiempo real.   
        </p>
      </div>
        <ul className="flex flex-col justify-center gap-7 z-2 ml-8">
          <li className="style-li-home font-semibold text-shadow-lg/30"><IconPackage  size={48} stroke={2} /> Control de productos</li>
          <li className="style-li-home font-semibold text-shadow-lg/30"><IconReport size={48} stroke={2} /> Reportes actualizados</li>
          <li className="style-li-home font-semibold text-shadow-lg/30"><IconLock size={48} stroke={2} /> Acceso seguro y personalizado</li>
        </ul>
    </div>

</div>
  );
};

export default Home;
