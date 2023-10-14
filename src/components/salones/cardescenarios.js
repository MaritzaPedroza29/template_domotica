import { CCard, CCol, CRow, CCardBody, CCardTitle } from '@coreui/react';
import '../../assets/css/index.css';

const Cardescenarios= ({informacion})=>{
  console.log(informacion.informacion);
    return (
      <CRow className='mio-contenedor-flex'>
      {informacion.informacion[0].data.salones.map((salon, index) => (
        <CCol md={3} key={index}>
          <CCard className='mio-cardsalones'>
            <CCardBody className=''>
              <CCardTitle>{salon.nombresalon}</CCardTitle>
              <p>{salon.dispositivos}</p>
              <img
                  src={salon.aire_acondicionado}
                  alt=""
                  className='mio-iconos'
              />
              <img
                  src={salon.televisor}
                  alt=""
                  className='mio-iconos'
              />
              <img
                  src={salon.puerta}
                  alt=""
                  className='mio-iconos'
              />
            </CCardBody>
          </CCard>
        </CCol>
      ))}
    </CRow>
    );
  }

export default Cardescenarios;