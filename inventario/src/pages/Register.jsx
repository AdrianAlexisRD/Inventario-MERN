import React, {  useState } from 'react';
import axios from 'axios';
import Header from '../componentes/header';



const SignUp = () =>{
  const [formData, setFormData] = useState({username: '', email: '', password: ''});


  const handleSubmit = async (e) =>{
    e.preventDefault();
    
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
      <div className='flex items-center  h-dvh'>
          <form  className="style-form" onSubmit={handleSubmit}>
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


          <button type="submit" className="style-btn">
            Submit
          </button>
        </form>
      </div>
    </div>
  
  );
}


export default SignUp ;