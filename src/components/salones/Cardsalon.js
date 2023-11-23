import { CCard, CButton, CCardBody, CCardTitle, CCardHeader, CCardText, CImage, CCol, CRow } from '@coreui/react';
import CIcon from '@coreui/icons-react';
import { useState, useEffect } from 'react';
import * as icon from '@coreui/icons';
import "../../assets/css/index.css";
import miimagen from "../../assets/images/dispositivos/aireacondicionado.png";
import BotonApagar from './BotonApagar';
import BotonApagarAire from './BotonApagarAire';

const CardSalon= ({ salon, dispositivo, iddispositivos, obtenerinfodispositivos})=>{
    const [iconColor, setIconColor] = useState('#D50000');
    const [iconoAire, setIconoaire] = useState('');
    console.log(dispositivo);
    return(
        <CCard className='mio-cardsalon'>
            <CCardHeader>
                <CRow className="align-items-center">
                <CCol>{salon.nombre_salon}</CCol>
                <CCol className="text-right">
                    <CIcon icon={icon.cilUser} width={30} />
                </CCol>
                </CRow>
            </CCardHeader>
            <CCardBody>
                {dispositivo.map((dispositivo, index) => (
                <div key={index}>
                    <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex flex-column align-items-center">
                        <div style={{  boxShadow: `0 0 5px ${iconColor}`  }}>
                            <CIcon icon={icon.cilTv} width={30} className="mr-3"/>
                        </div>
                        <CCardText>{dispositivo.vatios}</CCardText>
                        <BotonApagar dispositivo={dispositivo} iddispositivos={iddispositivos} setIconColor={setIconColor} obtenerinfodispositivos={obtenerinfodispositivos}></BotonApagar>
                    </div>
                    <div className="d-flex flex-column align-items-center">
                        <div>
                            <CImage src={miimagen} width={35} className="mr-10 mio-aire" style={{ boxShadow: `0 0 5px ${ iconoAire }`}} />
                        </div>
                        <BotonApagarAire dispositivo={dispositivo} iddispositivos={iddispositivos} setIconoaire={setIconoaire}></BotonApagarAire>
                    </div>
                    </div>
                    <div>
                    <CCardText className='text-center'>{dispositivo.temperatura}</CCardText>
                    </div>
                </div>
                ))}
            </CCardBody>
        </CCard>

    )
}
export  default CardSalon;