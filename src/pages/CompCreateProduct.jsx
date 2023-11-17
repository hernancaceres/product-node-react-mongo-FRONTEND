import axios from 'axios'
import { useState } from 'react'

const URI = 'http://localhost:4000/api/product'

const CompCreateProduct = () => {

    const [nombre, setNombre] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    //procedimiento guardar
    const store = async (e) => {
        e.preventDefault()
        await axios.post(URI, { username: nombre, email: email, password: password },
            { headers: { 'x-access-token': localStorage.getItem('token'), }, }
        );
    }

    return (
        <div className='container d-flex justify-content-center align-items-center h-100 text-light'>
            
                <form onSubmit={store}>
                    <div className='mb-3'>
                        <label className='form-label'>Nombre</label>
                        <input
                            value={nombre}
                            onChange={(e) => setNombre(e.target.value)}
                            type="text"
                            className='form-control'
                        />
                    </div>
                    <div className='mb-3'>
                        <label className='form-label'>Email</label>
                        <input
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            type="text"
                            className='form-control'
                        />
                    </div>
                    <div className='mb-3'>
                        <label className='form-label'>Password</label>
                        <input
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            type="text"
                            className='form-control'
                        />
                    </div>
                    <button type='submit' className='btn btn-outline-secondary border-0'>Crear Usuario</button>
                </form>
            
        </div>
    );
}

export default CompCreateProduct