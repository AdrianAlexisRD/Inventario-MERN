import { useState,   useContext , useEffect } from 'react';
import axios from 'axios';
import { Autetificacion } from '../contexts/Conectar.Login';
import { IconPlus , IconTableDown, IconCopyMinus } from '@tabler/icons-react';


export default function ListaParaLiquidar({ producto, articulo }) {
    const{  setActualizar , userON }= useContext(Autetificacion)
    const [exito , setExito] = useState('')
    const [manejarError , setError] = useState('')
    const [productos, setProductos] = useState([]);
    const { nota } = articulo
    const [historial , setHistorial] = useState( 
        {empleado: userON ,
        liquidado: productos,
        nota: nota})
        console.log(userON)
    
       const agregar = ()=>{
            if (producto && producto.name && producto.sacarDeStock && producto._id !== undefined) {
                setProductos(prev => {         
                    const existe = prev.some(p => p.name === producto.name);       
                    if (!existe) {
                        return [...prev, producto];
                    }
                    return prev;
                });
            }}

// 👇 Este useEffect mantiene actualizado el historial


useEffect(() => {
    setHistorial({
        empleado: userON,
        liquidado: productos,
        nota: nota
    });
}, [productos, userON, nota]);


    const handleEliminar = (e)=>{
        console.log(e.currentTarget.dataset.id)
        console.log(producto._id)
        const borrar = productos.filter(producto => producto._id !== e.currentTarget.dataset.id )
        console.log(borrar)
        setProductos(borrar)
    }



    const sacarListaDeProductos = async (id , sacarDeStock) =>{
        try{
        const resProduct = await axios.patch(`http://localhost:5002/api/${id}`,
            {sacarDeStock: sacarDeStock}
        )
        // console.log(historial)
        // const resLiquidar = await axios.post(`http://localhost:5002/api/liquidar`,
        //     historial
        // )
        setActualizar(articulo)
        if(resProduct.status === 200){
        console.log('se actualizo correctamente')
        setTimeout(() => setExito(''), 1000);
        setExito('!Se Actualizo correctamente!')
        }
        }catch(e){
            console.log(e)
            setTimeout(() => setError(''), 1000);
            setError('!Error al actualizar!')
        }
  }
    
  const historialLiquidacion =  async () =>{
    console.log(articulo )

    try{
        const res = await axios.post(`http://localhost:5002/api/liquidar`,
         historial
        )
        const productoLiquidado = res.data
        console.log(productoLiquidado)
        if (res.status === 200) {
        setActualizar(articulo)
        
        setTimeout(() => setExito(''), 1000);
        setExito('!Se Actualizo correctamente!')
        }
    }catch(error){
      console.log( error)
        setTimeout(() => setError(''), 1000);
        setError('!Error al actualizar!')
    }
  }
    const handleEnviar = () => {


        productos.map(Element =>(
            
        sacarListaDeProductos(Element._id , Element.sacarDeStock
        )))
        setActualizar(producto)

        historialLiquidacion()

        setProductos([])

    };



    return (
        <div className="style-form border-color mt-6 style-barra text-[18px] font-bold flex flex-col gap-5 relative">
            <h2 className='text-green-400 absolute z-20 top-11 '>{exito}</h2>
            <h2 className='text-red-400 absolute z-20 top-11 '>{manejarError}</h2>
            <h2 className='color-primario text-[24px]'>Lista para Liquidar</h2>
            
            {productos.length === 0 && !exito ? (
                <p className=' text-red-400'>No hay productos agregados</p>
            ) : (
               <ul>
                {productos.map(producto =>(
                    <li className=' flex justify-between border-b-2'>
                        <p>{producto.name}</p>
                        <p>{producto.sacarDeStock}</p>
                        <IconCopyMinus stroke={2} onClick={handleEliminar} data-id={producto._id}/>

                    </li>
                ))}
                
               </ul>
            )}
            
            <div className="">
                <p className='color-secundario'>Total productos: {productos.length}</p>
                <p className='color-secundario'>Total stock: {productos.reduce((sum, producto) => sum + Number(producto.sacarDeStock), 0)}</p>
            </div>
            <div className='flex justify-around'>
                <button 
                    onClick={agregar}
                    className="style-btn flex justify-center active:scale-80 "
                >
                    <IconPlus stroke={2} size={30} strokeWidth="3"  />
                </button>
                            <button 
                    onClick={handleEnviar}
                    disabled={productos.length === 0}
                    className="style-btn flex justify-center active:scale-80"
                >
                    <IconTableDown stroke={2} size={30} strokeWidth="3"/>
                </button>
            </div>

        </div>
    );
}



   
