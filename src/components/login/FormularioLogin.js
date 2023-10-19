import React from 'react'
import { CButton,CCard,CCardBody,CCardGroup,CCol,CContainer,CForm,CFormInput,CInputGroup,CInputGroupText,CRow,CImage} from '@coreui/react'
import { CFormFeedback } from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilUser } from '@coreui/icons'
import Logo from '../../assets/images/smartfesc.jpg'
import '../../assets/css/index.css'
import { useState } from 'react'

const FormularioLogin = ({ errores, callback }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const enviarFormulario= (e) =>{
        e.preventDefault();
        callback({username, password});
    }

    return (
        <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
          <CContainer>
            <CRow className="justify-content-center">
              <CCol md={8}>
                <CCardGroup>
                  <CCard className="p-4">
                    <CCardBody>
                      <CForm onSubmit={enviarFormulario}>
                        <h1>Iniciar sesión</h1>
                        <p className="text-medium-emphasis">Inicia sesión en tú cuenta</p>
                        <CInputGroup className="mb-3">
                          <CInputGroupText>
                            <CIcon icon={cilUser} />
                          </CInputGroupText>
                          <CFormInput type='email' placeholder="Username" autoComplete="username" value={username} onChange={e=>setUsername(e.target.value)} isInvalid={errores.username}/>
                          <CFormFeedback type="invalid">
                            {errores.username}
                          </CFormFeedback>
                        </CInputGroup>
                        <CInputGroup className="mb-4">
                          <CInputGroupText>
                            <CIcon icon={cilLockLocked} />
                          </CInputGroupText>
                          <CFormInput
                            type="password"
                            placeholder="Password"
                            autoComplete="current-password"
                            value={password}
                            onChange={e=>setPassword(e.target.value)}
                            isInvalid={errores.password}
                          />
                          <CFormFeedback type="invalid">
                            {errores.password}
                          </CFormFeedback>
                        </CInputGroup>
                        <CRow>
                          <CCol xs={6} className='mio-botones'>
                            <CButton type='submit'>
                              Iniciar sesión
                            </CButton>
                          </CCol>
                          <CCol xs={6} className="text-right">
                            <CButton color="link" className="px-0">
                              Forgot password?
                            </CButton>
                          </CCol>
                        </CRow>
                      </CForm>
                    </CCardBody>
                  </CCard>
                  <CCard style={{ width: '44%' }}>
                    <CCardBody className="align-item-center" style={{background:"#a4130e"}}>
                        <CImage src={Logo} width={300} className='mt-5 mb-5'></CImage>
                    </CCardBody>
                  </CCard>
                </CCardGroup>
              </CCol>
            </CRow>
          </CContainer>
        </div>
    );
}
export default FormularioLogin;
