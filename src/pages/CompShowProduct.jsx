import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import "../styles/CompShowProduct.css"
import { useThemeContext } from "../context/ThemeContext"

const URI = 'http://localhost:4000/api/products/'

const CompShowProduct = () => {
    const [productos, setProducto] = useState([])
    useEffect(() => { getProductos() }, [])

    const {contextTheme} = useThemeContext()    

    //procedimineto para mostrar todos los productos
    const getProductos = async () => {
        const res = await axios.get(URI)
        setProducto(res.data)
    }

    //procedimineto para eliminar un producto
    const deleteProducto = async (id) => {
        await axios.delete(`${URI}${id}`)
        getProductos()
    }
    return (
        
        <div className='container d-flex justify-content-center align-items-center h-100' >
            <div className='row'>
            
                <Link to="/crearproducto" className="btn btn-outline-secondary border-0"><i className="fas fa-plus"></i></Link>
                {productos.map((producto) => (
                    <div className="card col-md-4 text-center " style={{ width: "18rem" }} key={producto._id} id={contextTheme}>
                        <div className="card-body ">
                            <h5 className="card-title">{producto.name}</h5>
                            <h6 className="card-subtitle">{producto.category}</h6>
                            <p className="card-text ">{producto.price}</p>
                            <a href="#" className="btn btn-outline-secondary border-0">Añadir</a>
                            <Link to={`/editproducto/${producto._id}`} className='btn btn-outline-secondary'><i className="fas fa-edit"></i></Link>
                            <button onClick={() => deleteProducto(producto._id)} className='btn btn-outline-danger'><i className="fas fa-trash-alt"></i></button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default CompShowProduct