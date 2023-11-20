import { CCard, CButton, CCardBody, CCardTitle, CCardHeader, CCardText, CImage } from '@coreui/react';
import CIcon from '@coreui/icons-react';
import * as icon from '@coreui/icons';
import "../../assets/css/index.css";
import miimagen from "../../assets/images/aireacondicionado.png";

const CardSalon= ({})=>{
    return(
        <CCard>
            <CCardHeader>B105</CCardHeader>
            <CCardBody>
                <CIcon icon={icon.cilUser} />
                <div className=''>
                    <CIcon icon={icon.cilTv} />
                    <CCardText>38.5w</CCardText>
                    <CImage src={miimagen} width={30}/>
                    <CCardText>25C°</CCardText>
                </div>
            </CCardBody>
        </CCard>
    )
}
export  default CardSalon;