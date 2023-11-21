import { CCard, CButton, CCardBody, CCardTitle, CCardHeader, CCardText, CImage } from '@coreui/react';
import CIcon from '@coreui/icons-react';
import * as icon from '@coreui/icons';
import "../../assets/css/index.css";
import miimagen from "../../assets/images/dispositivos/aireacondicionado.png";

const CardSalon= ({ salon, dispositivo})=>{
    console.log(dispositivo[0].vatios);
    return(
        <CCard className='mio-cardsalones'>
            <CCardHeader>{salon.nombre_salon}
            <CIcon icon={icon.cilUser} width={30}/>
            </CCardHeader>
            <CCardBody>
                {dispositivo.map((dispositivo, index) => (
                <div key={index} className="d-flex justify-content-between align-items-center">
                    <div className="d-flex flex-column align-items-center">
                    <CIcon icon={icon.cilTv} width={30} className="mr-3" />
                    <CCardText>{dispositivo.vatios}</CCardText>
                    </div>
                    <div className="d-flex flex-column align-items-center">
                        <CImage src={miimagen} width={30} className="mr-10" />
                        <CCardText>{dispositivo.temperatura}</CCardText>
                    </div>
                </div>
                ))}
            </CCardBody>
        </CCard>
    )
}
export  default CardSalon;