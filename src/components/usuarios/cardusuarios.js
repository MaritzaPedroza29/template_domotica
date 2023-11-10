import { CButton, CCard, CCardBody, CCardTitle, CCardText, CFormSwitch, CBadge } from "@coreui/react";
import CIcon from '@coreui/icons-react';
import * as icon from '@coreui/icons';
import CForm from '@coreui/react';
import { useState, useEffect } from "react";
import ModalDetalleUsuario  from "./Modaldetalleusuario";


const CardUsuario= ({usuarios, eliminarUsuario, agregarUsuario, actualizarUsuario})=>{
    const [showModal, setShowModal] = useState(false);
    const [userData, setUserData] = useState([]);
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

      
      
    return(
        <>
        <CCard className="mt-3 mb-3 mio-contenedor" onClick={handleCardClick}>
            <CCardBody>
                <CCardTitle>{usuarios.nombre}</CCardTitle>
                <CCardText>{usuarios.correo}</CCardText>
                <div className="mio-botoneliminar">
                    <CButton variant="danger" className="" onClick={handleClick}>
                        <CIcon icon={icon.cilX} /> 
                    </CButton>
                </div>
            </CCardBody>
        </CCard>

        <ModalDetalleUsuario
          show={showModal}
          handleClose={handleCloseModal}
          userData={userData}
          agregarUsuario = {agregarUsuario}
          eliminarUsuarios = {eliminarUsuario}
          actualizarUsuario={actualizarUsuario}
        />
      </>
    )
}

export default CardUsuario