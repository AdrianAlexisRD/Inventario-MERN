import {  useState } from 'react';
import axios from 'axios';
import Header from '../componentes/header';
import BgHome from '../componentes/bg-home';



const SignUp = () =>{
  const [formData, setFormData] = useState({username: '', email: '', password: '' , empleado: ''});
  const [exito , setExito] = useState('')
  const [manejarError , setError] = useState('')
  const handleSubmit = async (e) =>{
    e.preventDefault();
    console.log(formData)
    
    try{
        const res = await axios.post(`http://localhost:5002/register`, formData)
        console.log(res.data)
        setTimeout(() => setExito(''), 1000);
        setExito('!Se ha registrado exitosamente!')
        setFormData({username: '', email: '', password: '' , empleado: ''})

    }catch(error){
      console.log(error)
      setTimeout(() => setError(''), 1000);
      setError('!Error al Registrarse!')
    }    
    
}

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((e) => ({ ...e,[name]: value,}));
  };


  return (
    <div>
    <Header/>
    <BgHome/>
      <div className='flex items-center justify-center h-dvh dark:bg-[#3f384c] '>      
          <form  className="style-form  h-fit z-20 w-[500px] flex flex-col border-color shadow-[0_35px_35px_rgba(0,0,0,0.25)]" onSubmit={handleSubmit} >
            <div className='flex justify-between'>
              <h2 className="text-xl font-bold mb-4">Registro</h2>
              <h2 className='text-green-600 z-20 top-11 '>{exito}</h2>
              <h2 className='text-red-600 text-20 z-20 top-11 '>{manejarError}</h2>
            </div>
            <label htmlFor='email' className="block mb-2 ">
                  Nombre de usuario:
                  <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  className="style-input "
                  placeholder='my user'
                  required
                  />
              </label>
              <label htmlFor='email' className="block mb-2">
              Email:
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="style-input"
                  placeholder='ejemplo@gamil.com'
                  required
                />
              </label>

              <label htmlFor='password' className="block mb-2">
                  Password:
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="style-input"
              
                required
              />
            </label>
            <label htmlFor='password' className="block mb-2">
              confirme contraseña
              <input
                type="password"
                name="repeat password"
                value={formData.password}
                onChange={handleChange}
                className="style-input"
                required
              />
            </label>
              <select name="empleado" htmlFor= 'empleado' className='block mb-4 h-12 dark:bg-[#121212] style-input' onChange={handleChange} value={formData.empleado}>
                <option value="">Tipo de empleado</option>
                <option value="colaborador">Colaborador</option>
                <option value="supervisor">supervisor</option>
              </select>
            <div className='flex justify-center '>
              <button type="submit" className="style-btn ">
                Submit
              </button>
            </div>

          </form>
      </div>
    </div>
  
  );
}


export default SignUp ;