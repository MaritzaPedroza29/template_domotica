import React from 'react'
import { useEffect, useState } from 'react'
import { CAlert, CCardBody, CCol, CContainer, CRow, CCardGroup,CCard, CImage } from '@coreui/react'
import { Link, useNavigate } from 'react-router-dom'
import FormularioLogin from '../../components/login/FormularioLogin.js'
import usuarios_login from '../../connections/usuarioslogin.js'
import logo from "../../assets/images/smartfesc.jpg";
import validator from 'validator'
import { useDispatch, useSelector } from 'react-redux'
//import { authentication } from '../../connections/usuarioDispach.js'
import { SIGIN_POST_ENDPOINT } from '../../connections/helpers/endpoints.js'
import axios from 'axios'
import { AUTORIZADO_GET_ENDPOINT } from '../../connections/helpers/endpoints.js'


function Login() {
    const navegar=useNavigate();
    const [errores, setErrores]= useState({});
    const [usuarios, setUsuarios] = useState([]);
    let usuario = {}
    useEffect(()=>{
        setUsuarios(usuarios_login);
    }, []);
      console.log(errores);
    const login=({username, password}) => {

      const error={};
      setErrores(error);
      
      if(!validator.isEmail(username)){
        error.username = "Dirección de correo electrónico no válida.";
      }

      if(!validator.isLength(password, {min: 6, max: 12})){
        error.password = "Contraseña debe tener entre 6 y 12 caracteres";
      }
      if(!(Object.keys(error).length===0)){
        setErrores(error);
        return;
      }
      usuario = {
        email : username,
        password: password
      }
    
      axios.post(SIGIN_POST_ENDPOINT,(usuario))
      .then(respuesta=>{
        console.log(respuesta);
        const token = respuesta.data.token;
        // Guardar el token en localStorage
        localStorage.setItem('token', token);
        autorizado();
      })
      .catch(err=>{
        setErrores({ respuesta: err.response.data });
      });
      
      const autorizado =() => {
        console.log("llama a esta función");
        const token = localStorage.getItem('token');

        // Configurar la cabecera de la solicitud con el token
        const headers = {
          Authorization: `Bearer ${token}`,
        };

        axios.get(AUTORIZADO_GET_ENDPOINT, { headers })
        .then(respuesta => {
          navegar("/");
        })
        .catch(error => {
          // Manejar errores, como token no válido, no autorizado, etc.
        });
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
                    {errores.ingresar && <CAlert color="danger">{errores.ingresar}</CAlert>}
                </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Login
