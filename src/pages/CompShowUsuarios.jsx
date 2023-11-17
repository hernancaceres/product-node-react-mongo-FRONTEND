import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const URI = 'http://localhost:4000/api/usuarios'

const CompShowUsuarios = () => {

    const [usuarios, setUsuario] = useState([])
    useEffect(() => {
        getUsuarios()
    }, [])

    //procedimineto para mostrar todos los usuarios
    const getUsuarios = async () => {
        const res = await axios.get(URI)
        setUsuario(res.data)
    }

    //procedimineto para eliminar un usuario
    const deleteUsuario = async (id) => {
        await axios.delete(`${URI}${id}`)
        getUsuarios()
    }

    return (
        <div className='container'>
            <div className='row'>
                <div className='col'>
                    <Link to="/register" className='btn btn-primary mt-2 mb-2'><i className="fas fa-plus"></i></Link>
                    <table className='table'>
                        <thead className='table-primary'>
                            <tr>
                                <th>Nombre</th>
                                <th>Email</th>
                                <th>Accion</th>
                            </tr>
                        </thead>
                        <tbody>
                            {usuarios.map((usuario) => (
                                <tr key={usuario._id}>
                                    <td> {usuario.username} </td>
                                    <td> {usuario.email} </td>

                                    <td>
                                        <Link to={`/edit/${usuario._id}`} className='btn btn-danger'><i className="fas fa-edit"></i></Link>
                                        <button onClick={() => deleteUsuario(usuario._id)} className='btn btn-danger'><i className="fas fa-trash-alt"></i></button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default CompShowUsuarios