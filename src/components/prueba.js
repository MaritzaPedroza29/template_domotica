import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';

const fakeUser = {
    id: 1,
    username: 'johndoe',
    email: 'johndoe@example.com',
    password: 'password123',
};
  
  const fakeAuthResponse = {
    token: 'fake-token',
    user: fakeUser,
  };
  
  const simulateLoginRequest = (username, password) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (username === fakeUser.username && password === fakeUser.password) {
          resolve(fakeAuthResponse);
        } else {
          reject(new Error('Invalid username or password'));
        }
      }, 1000);
    });
  };

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    
    const handleLogin = async () => {
        try {
          const response = await simulateLoginRequest(username, password);
          console.log('Login successful:', response);
        } catch (error) {
            console.error('Login failed:', error.message);
        }
      };
  
    return (
      <div>
        <input
          type="text"
          placeholder="Nombre de usuario"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin}>Iniciar sesión</button>
      </div>
    );
  };
  
  export {Login};