import { CCard, CButton, CCardBody, CCardTitle, CCardHeader, CCardText, CImage, CCol, CRow } from '@coreui/react';
import CIcon from '@coreui/icons-react';
import * as icon from '@coreui/icons';
import "../../assets/css/index.css";
import miimagen from "../../assets/images/dispositivos/aireacondicionado.png";
import BotonApagar from './BotonApagar';

const CardSalon= ({ salon, dispositivo, iddispositivos})=>{
    console.log(iddispositivos);
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
                        <CIcon icon={icon.cilTv} width={30} className="mr-3" />
                        <CCardText>{dispositivo.vatios}</CCardText>
                        <BotonApagar dispositivo={dispositivo} iddispositivos={iddispositivos}></BotonApagar>
                    </div>
                    <div className="d-flex flex-column align-items-center">
                        <CImage src={miimagen} width={30} className="mr-10" />
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