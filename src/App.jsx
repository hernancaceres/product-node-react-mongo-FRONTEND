
import ReactSwitch from 'react-switch';
import "./styles/App.css"
import { useThemeContext } from './context/ThemeContext';
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
import Menu from "./pages/Menu";
import { useState } from "react";

function App() {
  const { contextTheme, setContextTheme } = useThemeContext()
  const [checked, setChecked] = useState(false);

  const handleSwitch = (nextChecked) => {
    setContextTheme((state) => (state === 'Light' ? 'Dark' : 'Light'))
    setChecked(nextChecked);
    //console.log(nextChecked)
  }

  return (
    <div className="App" id={contextTheme}>
      <header className="App-header"  >
        <ReactSwitch
          onChange={handleSwitch}
          checked={checked}
          onColor="#86d3ff"
          onHandleColor="#2693e6"
          handleDiameter={30}
          uncheckedIcon={false}
          checkedIcon={false}
          boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
          activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
          height={20}
          width={48}
          className="react-switch"
          id="material-switch"
        />
        <h5>{contextTheme} Mode</h5>
        <CartProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Menu />} >
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
              </Route>
            </Routes>
          </BrowserRouter>
        </CartProvider>
      </header>
    </div>
  );
}
export default App
