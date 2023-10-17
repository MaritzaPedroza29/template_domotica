import { CButton, CCard, CCardBody, CCardTitle, CCardText, CFormSwitch, CBadge } from "@coreui/react";
import CIcon from '@coreui/icons-react';
import * as icon from '@coreui/icons';
import CForm from '@coreui/react';
import { useState, useEffect } from "react";
import Modaldetalleusuario  from "./modaldetalleusuario";


const Cardusuario= ({usuarios, eliminarUsuario, agregarUsuario, actualizarUsuario})=>{
    const [showModal, setShowModal] = useState(false);
    const [userData, setUserData] = useState([]);
    const [badgeClass, setBadgeClass] = useState(
      usuarios.data.estado === "1" ? "success" : "danger"
    );
    const [badgeText, setBadgeText] = useState(
      usuarios.data.estado === "1" ? "Activo" : "Inactivo"
    );
    useEffect(()=>{
      setUserData(usuarios);
    }, []);
    const handleClick = () => {
        eliminarUsuario(usuarios.data.id);
      };

      const handleCardClick = () => {
        setShowModal(true);
        setUserData(usuarios); // Pasar una matriz de usuarios
      };
    
      const handleCloseModal = () => {
        setShowModal(false);
      };

      const handleSwitchChange = (newSwitchValue) => {
        console.log(newSwitchValue);
        const newBadgeClass = newSwitchValue === "1" ? "success" : "danger";
        const newBadgeText = newSwitchValue === "1" ? "Activo" : "Inactivo";
    
        setBadgeClass(newBadgeClass);
        setBadgeText(newBadgeText);
      };
      
    return(
        <>
        <CCard className="mt-3 mb-3 mio-contenedor" onClick={handleCardClick}>
            <CCardBody>
                <img
                    src={usuarios.data.imagen}
                    alt=""
                    className='mio-cardimagen'
                />
                <CCardTitle>{usuarios.data.nombre}</CCardTitle>
                <CCardText>{usuarios.data.correo}</CCardText>
                <div className="mio-botoneliminar">
                    <CButton variant="danger" className="" onClick={handleClick}>
                        <CIcon icon={icon.cilX} /> 
                    </CButton>
                </div>
                <div className="mio-switch">
                  <CBadge color={badgeClass}>{badgeText}</CBadge>
                </div>
            </CCardBody>
        </CCard>

        <Modaldetalleusuario
          show={showModal}
          handleClose={handleCloseModal}
          userData={userData}
          agregarUsuario = {agregarUsuario}
          eliminarUsuarios = {eliminarUsuario}
          handleSwitchChange={handleSwitchChange}
          actualizarUsuario={actualizarUsuario}
        />
      </>
    )
}

export default Cardusuario