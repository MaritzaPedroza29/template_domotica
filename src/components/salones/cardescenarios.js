import { CCard, CCol, CRow, CCardBody, CCardTitle, CBadge } from '@coreui/react';
import '../../assets/css/index.css';

const Cardescenarios= ({informacion})=>{
  function obtenerDispositivo () {
    console.log(informacion);
  }
  console.log(informacion);
    return (
        <CRow className='mio-contenedor-flex'>
      {informacion[0].data.salones.map((salon, index) => (
        <CCol md={4}>
          <CCard className='mio-cardsalones' onClick={obtenerDispositivo}>
            <CCardBody className=''>
              <CCardTitle>{salon.nombresalon}</CCardTitle>
              {salon.dispositivos.map((dispositivo, dispositivoIndex) => (
                <>
                  <img
                    src={dispositivo.aire_acondicionado}
                    alt=""
                    className='mio-iconos'
                />
                <img src={dispositivo.televisor} alt='' className='mio-iconos'/>
                <img src={dispositivo.puerta} alt='' className='mio-iconos'/>
                </>
                ))}
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