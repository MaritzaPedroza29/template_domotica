import { CCard, CButton, CCardBody, CCardTitle, CRow, CCol, CImage } from '@coreui/react';
import '../../assets/css/index.css';
import  Botonapagartelevisor from './botonapagartelevisor';

const Cardtelevisores= ({televisores})=>{
    return(
    <CRow className="justify-content-between">
        <CCol xs={4}>
            <CCard className='mio-carddispositivos'>
                <CCardBody>
                    <CImage src={televisores.televisor} alt="" className="mio-iconos" />
                    <CCardTitle>{televisores.nombre}</CCardTitle>
                    <Botonapagartelevisor televisores={televisores}/>
                </CCardBody>
            </CCard>
        </CCol>
    </CRow>
    )
}
export default Cardtelevisores;