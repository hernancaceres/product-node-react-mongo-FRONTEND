import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const URI = 'http://localhost:4000/api/'

const CompEditUsuario = () => {
    const [nombre, setNombre] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()   
    const {id} = useParams()

    //procedimiento para actualizar
    const update = async (e) => {
        e.preventDefault()
        await axios.put(URI+id, {
            nombre: nombre,
            email: email,
            password:password
        })
        navigate('/')
    }

    useEffect( ()=>{
        getUsuarioById()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    const getUsuarioById = async () => {
        const res = await axios.get(URI+id)
        setNombre(res.data.nombre)
        setEmail(res.data.email)
        setPassword(res.data.password)
    }

    return (
        <div>
        <h3>Edit Usuario</h3>
        <form onSubmit={update}>
            <div className="mb-3">
                <label className="form-label">Nombre</label>
                <input
                    value={nombre}
                    onChange={ (e)=> setNombre(e.target.value)}
                    type="text"
                    className="form-control"                        
                />
            </div>
            <div className="mb-3">
                <label  className="form-label">Email</label>
                <textarea
                    value={email}
                    onChange={ (e)=> setEmail(e.target.value)}
                    type="text"
                    className="form-control"
                />
            </div>            
            <button type="submit" className="btn btn-primary">Update</button>
        </form>
    </div>
    )

}

export default CompEditUsuario