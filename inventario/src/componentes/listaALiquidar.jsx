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


useEffect(() => {
    setHistorial({
        empleado: userON,
        liquidado: productos,
        nota: nota
    });
}, [productos, userON, nota]);


    const handleEliminar = (e)=>{
        console.log(e.currentTarget.dataset.id)
        const borrar = productos.filter(producto => producto._id !== e.currentTarget.dataset.id )
        setProductos(borrar)
    }



    const sacarListaDeProductos = async (id , sacarDeStock) =>{
        try{
        const resProduct = await axios.patch(`http://localhost:5002/api/${id}`,
            {sacarDeStock: sacarDeStock}
        )
        setActualizar(articulo)
        if(resProduct.status === 200){
        console.log('se actualizo correctamente')
        setExito('!Se Liquido correctamente!')
        historialLiquidacion()

        }
        }catch(e){
            console.log(e.response.data.error)
            setError(e.response.data.error)
        }
  };
    
  const historialLiquidacion =  async () =>{
    try{
        const res = await axios.post(`http://localhost:5002/api/liquidar`,
         historial
        )
        const productoLiquidado = res.data
        console.log(productoLiquidado)
        if (res.status === 200) {
        setActualizar(articulo)
        
        setExito('!Se Liquido correctamente!')
        }
    }catch(e){
        setError( e + '!Error al actualizar!')
    }
  }
    const handleEnviar = () => {
       
        productos.map(Element =>(    
        sacarListaDeProductos(Element._id , Element.sacarDeStock)
    ))
        setActualizar(producto)
        setProductos([])

    };



    return (
        <div className="style-form border-color mt-6 style-barra text-[18px] font-bold flex flex-col gap-5 relative">
          {exito? <h2 className="text-green-500 ">{exito}</h2> : <h2 className="text-red-500 ">{manejarError}</h2>}

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



   
