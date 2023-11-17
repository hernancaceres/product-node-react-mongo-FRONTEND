
import { useState } from "react";
import axios from "axios";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:4000/api/signin", {
        email,
        password,
      });

      const token = response.data.token;

      // Guardar el token en el almacenamiento local o en el estado de la aplicación
      localStorage.setItem("token", token);
      console.log(token)
    } catch (error) {
      console.error("Error de inicio de sesión:", error);
    }
  };

  return (
    <div className='container d-flex justify-content-center align-items-center h-100 text-light'>

      <form onSubmit={handleSubmit}>
        <div className='mb-3'>
          <label className='form-label'>Email</label>
          <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className='mb-3'>
          <label className='form-label'>Password</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="submit" className='btn btn-outline-secondary'>Iniciar sesión</button>
      </form>

    </div>
  );
}

export default LoginForm;
