import React, { useState } from "react";

const USER_CREDENTIALS = {
  username: "admin",
  password: "admin",
};

export const Login = ({ iniciarSesion }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      username === USER_CREDENTIALS.username &&
      password === USER_CREDENTIALS.password
    ) {
      alert("Login exitoso");
      setError("");
      iniciarSesion();
    } else {
      alert("Login incorrecto");
      setError("Credenciales incorrectas");
      setUsername("");
      setPassword("");
    }
  };

  return (
    <div>
      <h1>Iniciar sesión</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Usuario: </label>
          <input
            type="text"
            name="username"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div style={{ paddingTop: "10px" }}>
          <label htmlFor="password">Contraseña: </label>
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div style={{ paddingTop: "50px" }}>
          <button type="submit">Iniciar sesión</button>
        </div>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </form>
    </div>
  );
};
