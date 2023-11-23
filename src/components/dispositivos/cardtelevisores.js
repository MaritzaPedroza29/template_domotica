import { CCard, CButton, CCardBody, CCardTitle, CRow, CCol, CImage } from '@coreui/react';
import '../../assets/css/index.css';
import  BotonApagarTelevisor from './botonapagartelevisor';

const CardTelevisores= ({televisores})=>{
    return(
    <CRow className="justify-content-between">
        <CCol xs={4}>
            <CCard className='mio-carddispositivos'>
                <CCardBody>
                    <CImage src={televisores.televisor} alt="" className="mio-iconos" />
                    <CCardTitle>{televisores.nombre}</CCardTitle>
                    <BotonApagarTelevisor televisores={televisores}/>
                </CCardBody>
            </CCard>
        </CCol>
    </CRow>
    )
}
export default CardTelevisores;