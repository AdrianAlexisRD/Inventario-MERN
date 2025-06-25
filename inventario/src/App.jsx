import { Routes, Route  } from 'react-router-dom';
import Home from './pages/HomePage';
import ListarArticulos from './pages/inventario';
import Login  from './pages/login';
import SignUp from './pages/Register'



function App() {

  return (

    <Routes >
      <Route path="*" element={<Home/>} />
      <Route path="/" element={<Home/>} />
      <Route path="/Login" element={<Login/>} />
      <Route path="/SignUp" element={<SignUp/>} />
      <Route path="/listaDeArticulos" element={<ListarArticulos/>} />
    </Routes>

  )
}

export default App
