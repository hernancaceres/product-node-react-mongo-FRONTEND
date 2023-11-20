
import { Link, Outlet } from "react-router-dom"

const Menu = () => {
    return (
        <div>
            <nav>
                <ul className='list'>
                    <li><Link to="/home" >Home</Link></li>
                    <li><Link to="/login" >Login</Link></li>
                    <li><Link to="/productos">Productos</Link></li>
                    <li><Link to="/register">Registro</Link></li>
                    <li><Link to="/usuarios">Usuarios</Link></li>
                    <li><Link to="/crearproducto">Crear un Producto</Link></li>
                    <li><Link to="/cart">Carrito de compra</Link></li>
                </ul>
            </nav>
            <section>
                <Outlet></Outlet>
            </section>
        </div>
    )
}

export default Menu