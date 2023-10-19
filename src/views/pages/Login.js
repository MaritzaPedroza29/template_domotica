import React from 'react'
import { useEffect, useState } from 'react'
import { CAlert, CCardBody, CCol, CContainer, CRow } from '@coreui/react'
import { Link, useNavigate } from 'react-router-dom'
import FormularioLogin from '../../components/login/FormularioLogin.js'
import usuarios_login from '../../connections/usuarioslogin.js'

const Login= ()=> {
    const navegar=useNavigate();
    const [errores, setErrores]= useState({});
    const [usuarios, setUsuarios] = useState([]);
    useEffect(()=>{
        setUsuarios(usuarios_login);
    }, []);

    const login=({username, password}) => {
        console.log(usuarios);
        const usuarioEncontrado = usuarios.find((usuario) => {
            return usuario.usuario === username && usuario.contraseña === password;
          });
          
          if (usuarioEncontrado) {
            // Navega a la página deseada
            navegar("/dispositivos");
          } else {
            setErrores({ ingresar: "No se puede iniciar sesión con esas credenciales" });
          }
    }
  return (
    <CContainer className="mt-3 mb-3">
        {errores.ingresar && <CAlert color="danger">{errores.ingresar}</CAlert>}
        <FormularioLogin errores={errores} callback={login}></FormularioLogin>
    </CContainer>
  )
}

export default Login
