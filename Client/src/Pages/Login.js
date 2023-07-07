import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = (event) => {
    event.preventDefault();

    // Verificar o email e senha
    if (email === 'user@example.com' && password === 'password') {
      // Autenticação bem-sucedida
      setLoggedIn(true);
      setErrorMessage('');
    } else {
      // Autenticação falhou
      setLoggedIn(false);
      setErrorMessage('Credenciais inválidas.');
    }
  };

  if (loggedIn) {
    return <Navigate to="/grupos" />;
  }

  return (
    <div>
      <h1>Login</h1>
      {errorMessage && <p>{errorMessage}</p>}
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
};

export default Login;
