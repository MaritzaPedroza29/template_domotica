import { CButton, CCard, CCardBody, CCardTitle, CCardText, CFormSwitch } from "@coreui/react";
import CIcon from '@coreui/icons-react';
import * as icon from '@coreui/icons';
import CForm from '@coreui/react';
import { useState } from "react";
import Modaldetalleusuario  from "./modaldetalleusuario";


const Cardusuario= ({usuarios, eliminarUsuario, agregarUsuario})=>{
    const [showModal, setShowModal] = useState(false);
    const [userData, setUserData] = useState([]);
    console.log(typeof(userData));

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
        <CCard className="mt-3 mb-3 mio-contenedor">
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
                <CFormSwitch // prettier-ignore
                    type="switch"
                   className=""
                />
                </div>
                <div className="mio-botones">
                  <CButton className="" onClick={handleCardClick}>
                    <CIcon icon={icon.cilColorBorder}/>
                  </CButton>
                </div>
            </CCardBody>
        </CCard>

        <Modaldetalleusuario
          show={showModal}
          handleClose={handleCloseModal}
          userData={userData}
          agregarUsuario = {agregarUsuario}
        />
      </>
    )
}

export default Cardusuario