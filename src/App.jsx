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
import CompEditProduct from "./pages/CompEditproduct";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import { CartProvider } from "./context/CartContext";
import ProductDetail from "./pages/ProductDetail";

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <CartProvider>
          <Routes>
            <Route path='/' element={<LoginForm />} />
            <Route path='/home' element={<Home />} />
            <Route path='/login' element={<LoginForm />} />
            <Route path='/register' element={<CompCreateUsuario />} />
            <Route path='/edit/:id' element={<CompEditUsuario />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path='/usuarios' element={<CompShowUsuarios />} />
            <Route path='/productos' element={<CompShowProduct />} />
            <Route path='/crearproducto' element={<CompCreateProduct />} />
            <Route path='/editproducto/:id' element={<CompEditProduct />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/product/:id' element={<ProductDetail />} />
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </div>
  );
}
export default App
