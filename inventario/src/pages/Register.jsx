import {  useState } from 'react';
import axios from 'axios';
import Header from '../componentes/header';
import BgHome from '../componentes/bg-home';



const SignUp = () =>{
  const [formData, setFormData] = useState({username: '', email: '', password: '' , empleado: ''});

  const handleSubmit = async (e) =>{
    e.preventDefault();
    console.log(formData)
    
    try{
        const res = await axios.post(`http://localhost:5002/register`, formData)
        console.log(res.data)

    }catch(error){
      console.log(error)
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
      <div className='flex items-center justify-center h-dvh dark:bg-[#3f384c]'>
        <div className='p-3 border-color '>
          <form  className="style-form  rounded h-fit z-20 w-[500px]" onSubmit={handleSubmit} >
              <h2 className="text-xl font-bold mb-4">Registro</h2>

            <label htmlFor='email' className="block mb-2 ">
                  User name
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
                placeholder='******'
                required
              />
            </label>
              <select name="empleado" htmlFor= 'empleado' className='block mb-2' onChange={handleChange} value={formData.empleado}>
                <option value="">Tipo de empleado</option>
                <option value="colaborador">Colaborador</option>
                <option value="supervisor">supervisor</option>
              </select>

            <button type="submit" className="style-btn z-100">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  
  );
}


export default SignUp ;