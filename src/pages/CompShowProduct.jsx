import axios from 'axios'
import { useState, useEffect } from 'react'
import "../styles/CompShowProduct.css"

const URI = 'http://localhost:4000/api/products'

const CompShowProduct = () => {
    const [productos, setProducto] = useState([])
    useEffect(() => { getProductos() }, [])

    //procedimineto para mostrar todos los productos
    const getProductos = async () => {
        const res = await axios.get(URI)
        setProducto(res.data)
    }

    return (
        <div className='container d-flex justify-content-center align-items-center h-100'>
            <div className='row'>

                {productos.map((producto) => (
                    <div className="card col-md-4 text-center bg-dark" style={{ width: "18rem" }} key={producto._id} >
                        <div className="card-body text-light">
                            <h5 className="card-title">{producto.name}</h5>
                            <h6 className="card-subtitle">{producto.category}</h6>
                            <p className="card-text text-warning">{producto.price}</p>
                            <a href="#" className="btn btn-outline-secondary border-0">Go somewhere</a>
                        </div>
                    </div>
                ))}


            </div>
        </div>
    )
}
export default CompShowProduct