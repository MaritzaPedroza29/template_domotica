import { CCard, CCol, CRow, CCardBody, CCardTitle, CBadge } from '@coreui/react';
import '../../assets/css/index.css';

const Cardescenarios= ({informacion})=>{
  console.log(informacion);
    return (
      <CRow className='mio-contenedor-flex'>
      {informacion[0].data.salones.map((salon, index) => (
        <CCol md={4}>
          <CCard className='mio-cardsalones'>
            <CCardBody className=''>
              <CCardTitle>{salon.nombresalon}</CCardTitle>
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
              <CBadge
                className="border border-light p-2"
                color="danger"
                position="top-end"
                shape="rounded-circle"
              ></CBadge>
            </CCardBody>
          </CCard>
        </CCol>
      ))}
    </CRow>
    );
  }

export default Cardescenarios;