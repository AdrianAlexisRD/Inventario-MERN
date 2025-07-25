import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Autetificacion } from '../contexts/Conectar.Login';
import Header from "../componentes/header";
import axios  from "axios";
import BgHome from '../componentes/bg-home';


const Login = () => {
  const { dispatch , setTipoAcceso } = useContext(Autetificacion);
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [manejarError , setError] = useState('')
  

  const navigate = useNavigate();


   const hacerLogin = async (e) =>{
    e.preventDefault();

    try{
        const res = await axios.post(`http://localhost:5002/login`, formData)
        const {username , empleado} = await res.data
        console.log(empleado + username)
        console.log(res.data)

        setTipoAcceso({type: 'SET_VALUE', payload: empleado  })
        await dispatch({type: 'SET_VALUE', payload: username  })
        navigate('/listaDeArticulos')
 
    }catch(error){
        console.error('Error al hacer login' , error.message);
        // setTimeout(() => setError(''), 3000);
        setError('!Error de usuario o contraseña!')
    }
 }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className='flex flex-col dark:bg-[#3f384c] bg-white '>
      <Header />
      <BgHome/>

      <div className=' flex sm:items-center justify-center h-dvh relative'>
          <form className="style-form h-fit shadow-[0_35px_35px_rgba(0,0,0,0.25)] border-color w-[400px] sm:h-[300px] sm:w-[500px]" onSubmit={hacerLogin}>
            <div className='flex justify-between'>
              <h2 className="text-xl font-bold mb-4">Login</h2>
              <h2 className='text-red-600 text-20 z-20 top-11 '>{manejarError}</h2>
            </div>

            <div className="block mb-2">
              <label htmlFor='email' className="block mb-1">
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="style-input"
                placeholder='ejemplo@gmail.com'
                required
              />
            </div>

            <div className="block mb-2">
              <label htmlFor='password' className="block mb-1">
                Password:
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="style-input"
                placeholder=''
                required
              />
            </div>

            <div className='flex justify-center gap-5 mt-4'>
              <button 
                type="submit" 
                className="style-btn">
                sign in
              </button>
              <button 
                type="button" 
                className="style-btn"
                onClick={() => navigate('/SignUp')}
              >
                Sign up
              </button>
            </div>
          </form>
        
      </div>
    </div>
  );
};

export default Login;