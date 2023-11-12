
import  { useState } from "react";
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
    <form onSubmit={handleSubmit}>
      <div>
        <label>Email:</label>
        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div>
        <label>Contraseña:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <button type="submit">Iniciar sesión</button>
    </form>
  );
}

export default LoginForm;



/*
function LoginForm() {
  
  return (
    <h1>login</h1>
  );
}

export default LoginForm;
*/