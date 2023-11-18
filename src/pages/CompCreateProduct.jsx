import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from "react-router-dom";

const URI = 'http://localhost:4000/api/products'

const CompCreateProduct = () => {

    const [name, setName] = useState('')
    const [category, setCategory] = useState('')
    const [price, setPrice] = useState('')
    const navigate = useNavigate();


    //procedimiento guardar
    const store = async (e) => {
        e.preventDefault()
        await axios.post(URI, { name: name, category: category, price: price },
            { headers: { 'x-access-token': localStorage.getItem('token'), }, }
        );

        // Redirige a la página productos
        navigate('/productos');
    }


    return (
        <div className='container d-flex justify-content-center align-items-center h-100 text-light'>

            <form onSubmit={store}>
                <div className='mb-3'>
                    <label className='form-label'>Nombre</label>
                    <input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        type="text"
                        className='form-control'
                    />
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Categoría</label>
                    <input
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        type="text"
                        className='form-control'
                    />
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Precio</label>
                    <input
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        type="text"
                        className='form-control'
                    />
                </div>
                <button type='submit' className='btn btn-outline-secondary border-0'>Crear Producto</button>
            </form>

        </div>
    );
}

export default CompCreateProduct