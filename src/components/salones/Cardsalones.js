import { CCard, CCol, CRow, CCardBody, CCardTitle, CBadge} from '@coreui/react';
import { CImage } from '@coreui/react'
import { useState } from 'react';
import ModalDetalleSalon from './modaldetallesalon';
import '../../assets/css/index.css';

const CardSalones = ({ informacion }) => {
  const [showModal, setShowModal] = useState(false);
  const [salonesdata, setSalonesdata] = useState([]);
  const [selectedSalon, setSelectedSalon] = useState(null);
  console.log(informacion);
  const handleCardClick = (salonData) => {
    setSelectedSalon(salonData);
    setShowModal(true);
    setSalonesdata(salonData);
  };
  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
    <CRow className='mio-contenedor-flex'>
      {informacion[0].data.salones.map((salon, index) => (
        <CCol md={4} key={index}>
          <CCard className='mio-cardsalones' onClick={() => handleCardClick(salon)}>
            <CCardBody className=''>
              <CCardTitle>{salon.nombresalon}</CCardTitle>
              <div className="mio-imagen-container" style={{display:'flex'}}>
                {salon.dispositivos.map((dispositivo, dispositivoIndex) => (
                  <>
                  <CImage
                      src={dispositivo.aire_acondicionado}
                      alt=""
                      className='mio-iconos'
                    />
                    <CImage 
                      src={dispositivo.televisor} 
                      alt=''
                      className='mio-iconos'/>
                    <CImage 
                      src={dispositivo.puerta} 
                      alt='' 
                      className='mio-iconos'/>
                  </>   
                ))}
              </div>
            </CCardBody>
          </CCard>
        </CCol>
      ))}
    </CRow>
    {selectedSalon && ( // Mostrar componente solo si se ha seleccionado una tarjeta
        <ModalDetalleSalon
          show={showModal}
          handleClose={handleCloseModal}
          salonesdata={salonesdata}
        />
      )}
    </>
  );
}


export default CardSalones;