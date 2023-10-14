import React from 'react';
import { CCard, CCol, CRow, CCardBody } from'@coreui/react';
import { CTooltip } from '@coreui/react'
import '../../assets/css/index.css';
import { Cuadrado } from './cuadradoinicio';
import CButton from '@coreui/react';

const Rectangulo= ({ bloque }) =>{
  console.log(bloque.data.pisos);

  // Asegúrate de que bloque.data.pisos sea un arreglo
  const pisos = bloque.data.pisos || []; // Si no hay pisos, utiliza un arreglo vacío
  console.log(pisos);
  const customTooltipStyle = {
    '--cui-tooltip-bg': 'var(--cui-primary)',
  }

  return (
    <>
    <label>{bloque.bloque}</label>
    <div className="mio-centrar-tarjeta">
    <CCard className="mio-rectangle">
      <CCardBody>
        {pisos.map((piso, index) => (
          <>
          <label>{piso.piso}</label>
          <CCard className="mio-rectangle-piso" key={index}>
            <CCardBody>
              <CRow>
                  {piso.salones.map((salon, salonIndex) => (
                    <CCol key={salonIndex}>
                      <Cuadrado salones={salon}>{salon}</Cuadrado>
                    </CCol>
                  ))}
              </CRow></CCardBody>
          </CCard>
          </>
        ))}
      </CCardBody>
    </CCard>
    <CCard>
      <CCardBody className='mio-cardinformacion'>
        <CRow>
          <CTooltip
            content="El aire acondicionado está apagado y no hay personas en el aula"
            placement="top"
            style={customTooltipStyle}
          >
            <CCol sm="auto">
                <div className="mio-cuadradoinfo" style={{ backgroundColor: '#4caf50' }}></div>
            </CCol>  
          </CTooltip>
          <CTooltip
            content="El aire acondicionado está prendido pero hay personas en el aula"
            placement="top"
            style={customTooltipStyle}
          >
            <CCol sm="auto">
              <div className='mio-cuadradoinfo' style={{backgroundColor : '#ff9800'}}></div>
            </CCol>
          </CTooltip>
          <CTooltip
            content="El aire acondicionado está prendido pero no hay personas en el aula"
            placement="top"
            style={customTooltipStyle}
          >
            <CCol sm="auto">
              <div className='mio-cuadradoinfo' style={{backgroundColor: '#f41201'}}></div>
            </CCol>
          </CTooltip>
        </CRow>
      </CCardBody>
    </CCard>
    </div>
    </>
  );
}

export default Rectangulo;