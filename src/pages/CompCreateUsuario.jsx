import axios from 'axios'
import { useState } from 'react'


const URI = 'http://localhost:4000/api/signup'

const CompCreateUsuario = () => {
    const [nombre, setNombre] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    //procedimiento guardar
    const store = async (e) => {
        e.preventDefault()
        await axios.post(URI, { username: nombre, email: email, password: password },
            {
                headers: {
                    'x-access-token': localStorage.getItem('token'),
                },
            });
    }

    return (
        <div>
            <h3>Create Usuario</h3>
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
                    <textarea
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
                <button type='submit' className='btn btn-primary'>Store</button>
            </form>
        </div>
    )
}

export default CompCreateUsuario