import "./styles/App.css"
import LoginForm from './pages/LoginForm';
import Dashboard from './pages/Dashboard';
import CompCreateUsuario from './pages/CompCreateUsuario';
import CompEditUsuario from './pages/CompEditUsuario';
import CompShowUsuarios from './pages/CompShowUsuarios';
import CompShowProduct from './pages/CompShowProduct';
import CompCreateProduct from './pages/CompCreateProduct';

//importamos el router
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LoginForm />} />
          <Route path='/login' element={<LoginForm />} />
          <Route path='/register' element={<CompCreateUsuario />} />
          <Route path='/edit/:id' element={<CompEditUsuario />} />
          <Route path="/api/dashboard" element={<Dashboard />} />
          <Route path='/usuarios' element={<CompShowUsuarios />} />
          <Route path='/productos' element={<CompShowProduct />} />
          <Route path='/crearproducto' element={<CompCreateProduct />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App
