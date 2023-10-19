import { CModal, CButton, CModalHeader, CModalTitle, CModalBody, CModalFooter, CCard, CCardBody, CImage ,CFormSwitch, CRow, CCol, CCardText} from '@coreui/react';
import { useState, useEffect } from 'react';

const ModalDetalleSalon= ({show, handleClose, salonesdata})=>{
    const  [visible, setVisible] = useState(false);
    const [salon, setSalon] = useState(null);
    const [isSwitchCheckedaire, setIsSwitchCheckedaire] = useState(salonesdata.dispositivos[0].estado === 1);
    const [isSwitchCheckedpuerta, setIsSwitchCheckedpuerta] = useState(salonesdata.dispositivos[1].estado === 1);
    const [isSwitchCheckedtv, setIsSwitchCheckedtv] = useState(salonesdata.dispositivos[2].estado === 1);

    useEffect(() => {
        if (salonesdata && salonesdata.dispositivos) {
            setSalon(salonesdata);
        }
    }, [salonesdata]);

return (
<CModal visible={show} onClose={() => setVisible(false)} aria-labelledby="VerticallyCenteredExample">
  <CModalHeader onClose={handleClose}>
    <CModalTitle>Dispositivos del salon {salonesdata.nombresalon}</CModalTitle>
  </CModalHeader>
  <CModalBody>
  <CRow className="justify-content-between">
        <CCol xs={4}>
            <CCard>
                <CCardBody>
                    <CCardText>{salonesdata.dispositivos[0].nombre}</CCardText>
                    <CImage src={salonesdata.dispositivos[0].aire_acondicionado} width={30}/>
                    <CFormSwitch  id="formSwitchCheckDefaultNormal"  checked={isSwitchCheckedaire}
                        onChange={(e) => setIsSwitchCheckedaire(e.target.checked)}/>
                </CCardBody>
            </CCard>
        </CCol>
        <CCol xs={4}>
            <CCard>
                    <CCardBody>
                        <CCardText>{salonesdata.dispositivos[1].nombre}</CCardText>
                        <CImage src={salonesdata.dispositivos[1].televisor} width={30}/>
                        <CFormSwitch  id="formSwitchCheckDefaultNormal" checked={isSwitchCheckedtv}
                        onChange={(e) => setIsSwitchCheckedtv(e.target.checked)}/>
                    </CCardBody>
                </CCard>
        </CCol>
        <CCol>
        <CCard xs={4}>
                    <CCardBody>
                        <CCardText>{salonesdata.dispositivos[2].nombre}</CCardText>
                        <CImage src={salonesdata.dispositivos[2].puerta} width={30}/>
                        <CFormSwitch  id="formSwitchCheckDefaultNormal" checked={isSwitchCheckedpuerta}
                        onChange={(e) => setIsSwitchCheckedpuerta(e.target.checked)}/>
                    </CCardBody>
                </CCard>
        </CCol>
    </CRow>
  </CModalBody>
  <CModalFooter>
    <CButton color="danger" onClick={handleClose} >Cerrar</CButton>
  </CModalFooter>
</CModal>
)
}

export default ModalDetalleSalon;