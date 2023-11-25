import React from 'react'
import { CButton,CForm,CFormInput,CInputGroup,CInputGroupText} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilUser } from '@coreui/icons'
import '../../assets/css/index.css'
import { useState } from 'react'

function FormularioLogin(props){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const enviarFormulario= (e) =>{
        e.preventDefault();
        props.callback({username, password});
    }

    return (
      <CForm className="text-center" onSubmit={enviarFormulario}>
      <h2>Iniciar sesion</h2>
      <CInputGroup className="mt-4">
          <CInputGroupText>
              <CIcon icon={cilUser} />
          </CInputGroupText>
          <CFormInput 
              type="Email"
              placeholder="Usuario" 
              autoComplete="username"
              value={username}
              onChange={e=>setUsername(e.target.value)}
              feedback={props.errores.username}
              invalid={props.errores.username && true}                    
          />
      </CInputGroup>
      <CInputGroup className="mt-3">
          <CInputGroupText>
              <CIcon icon={cilLockLocked} />
          </CInputGroupText>
          <CFormInput
              type="password"
              placeholder="Contraseña"
              autoComplete="password"
              value={password}
              onChange={e=>setPassword(e.target.value)}
              feedback={props.errores.password}
              invalid={props.errores.password && true}                    
          />
      </CInputGroup>
      <CButton color="danger" className="text-white mt-4" type="submit">
      Acceder
      </CButton>
  </CForm>
    );
}
export default FormularioLogin;
