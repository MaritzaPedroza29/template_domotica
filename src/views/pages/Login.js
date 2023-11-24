import React from 'react'
import { useEffect, useState } from 'react'
import { CAlert, CCardBody, CCol, CContainer, CRow, CCardGroup,CCard, CImage } from '@coreui/react'
import { Link, useNavigate } from 'react-router-dom'
import FormularioLogin from '../../components/login/FormularioLogin.js'
import usuarios_login from '../../connections/usuarioslogin.js'
import logo from "../../assets/images/smartfesc.jpg";
import validator from 'validator'


const Login= ()=> {
    const navegar=useNavigate();
    const [errores, setErrores]= useState({});
    const [usuarios, setUsuarios] = useState([]);
    useEffect(()=>{
        setUsuarios(usuarios_login);
    }, []);

    const login=({username, password}) => {

      const error={};
      setErrores(error);
      
      if(!validator.isNumeric(username)){
        error.idUsuario = "Cedula debe ser solo numeros";
      }

      if(!validator.isLength(password, {min: 6, max: 12})){
        error.password = "Contraseña debe tener entre 6 y 12 caracteres";
      }
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
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={8}>
            <CCardGroup>
                <CCard className="p-4">    
                    <CImage className='mx-auto' src={logo} width={300} height={300} />       
                </CCard>
                <CCard className="p-4">
                    <CCardBody className="d-flex align-items-center justify-content-center">
                      <FormularioLogin errores={errores} callback={login}></FormularioLogin>
                    </CCardBody>
                    {errores.respuesta && <CAlert color="danger">{errores.respuesta}</CAlert>}
                </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Login
