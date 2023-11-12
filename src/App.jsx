
import LoginForm from './pages/LoginForm';
import Dashboard from './pages/Dashboard';
import CompCreateUsuario from './pages/CompCreateUsuario';
import CompEditUsuario from './pages/CompEditUsuario';
import CompShowUsuarios from './pages/CompShowUsuarios';

//importamos el router
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {

  return (
    <div >
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LoginForm />} />
          <Route path='/register' element={<CompCreateUsuario />} />
          <Route path='/edit/:id' element={<CompEditUsuario />} />
          <Route path="/api/dashboard" element={<Dashboard />} />
          <Route path='/usuarios' element={<CompShowUsuarios />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App
