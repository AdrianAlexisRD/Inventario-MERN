import Header from "../componentes/header";
// import imagenHome3 from "../assets/imagen-2.png";
import { IconPackage, IconLock , IconReport  } from '@tabler/icons-react';
// import cajasBg from "../assets/cajas-bg.png";
import BgHome from "../componentes/bg-home";
const Home = () => {
  return (
<div className="justify-center dark:bg-[#3f384c] bg-white">
  <Header />
  <BgHome/>
  {/* <div className="grid sm:grid-cols-2 "> */}
    <div className="flex flex-col md:flex-row md:gap-[50px] md:m-5 mt-10   items-center md:justify-center h-dvh  ">
      <div className="border-color p-1 mb-10 md:w-[50%] w-[90%]  ">
      <p className="md:text-[35px] Modo-Dark rounded p-2  ">
        Bienvenido a <span className="text-fuchsia-500">StockMaster</span> Administra tu inventario de forma
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
        {/* <img src={cajasBg} alt="cajas" className="sm:w-[30%] w-[80%]  absolute z-[0] opacity-[0.2] sm:bottom-[20px] blur-sm" /> */}
    </div>
  {/* <div className=" dark:bg-[#121212]/[0.7] h-dvh justify-center transition-all duration-300 ease-in-out hidden sm:flex ">
    <img src={imagenHome3} alt="imagen-2" className="w-[80%] h-[70%]  mt-10 "/>
  </div> */}
  {/* </div> */}
</div>
  );
};

export default Home;
