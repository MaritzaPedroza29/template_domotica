import { CCard, CButton, CCardBody, CCardTitle, CRow, CCol, CImage } from '@coreui/react';
import '../../assets/css/index.css';
import  Botonapagarpuerta from './botonapagarpuerta';

const Cardpuertas= ({puertas})=>{
    return(
    <CRow className="justify-content-between">
        <CCol xs={4}>
            <CCard className='mio-carddispositivos'>
                <CCardBody>
                    <CImage src={puertas.puerta} alt="" className="mio-iconos" />
                    <CCardTitle>{puertas.nombre}</CCardTitle>
                    <Botonapagarpuerta puertas={puertas}/>
                </CCardBody>
            </CCard>
        </CCol>
    </CRow>
    )
}
export default Cardpuertas;