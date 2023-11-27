import { CCard, CButton, CCardBody, CCardTitle, CCardHeader, CCardText, CImage, CCol, CRow } from '@coreui/react';
import CIcon from '@coreui/icons-react';
import { useState, useEffect } from 'react';
import * as icon from '@coreui/icons';
import "../../assets/css/index.css";
import miimagen from "../../assets/images/dispositivos/aireacondicionado.png";
import BotonApagar from './BotonApagar';
import BotonApagarAire from './BotonApagarAire';
import BotonApagarPuerta from './BotonApagarpuerta';

const CardSalon= ({ salon, dispositivo, iddispositivos, callback})=>{
    const [iconColor, setIconColor] = useState('');
    const [iconoAire, setIconoaire] = useState('');
    const [iconoPuerta, setIconoPuerta] = useState('');
    const [backgroundColor, setBackgroundColor] = useState('')

    useEffect(() => { 
        switch (dispositivo.temperatura) {
            case  dispositivo.temperatura<=20:
              setBackgroundColor("#2962FF")
              break;
            case dispositivo.temperatura>=22 && dispositivo.temperatura<=25:
                setBackgroundColor("#00C853")
              break;
            case dispositivo.temperatura>=26 && dispositivo.temperatura<=27:
                setBackgroundColor("#FF6D00")
              break;
            default:
                setBackgroundColor("#E53935")
          }
    }, [dispositivo.temperatura]);

    console.log(dispositivo);
    const statusChange= ()=>{
        console.log("si está llamando a esta función");
        callback();
    }

    return(
        <CCard className='mio-cardsalon' style={{  boxShadow: `0 0 15px ${backgroundColor}` }}>
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
                        <BotonApagar dispositivo={dispositivo} iddispositivos={iddispositivos} setIconColor={setIconColor} callback={statusChange}></BotonApagar>
                    </div>
                    <div className="d-flex flex-column align-items-center">
                        <div>
                            <CImage src={miimagen} width={35} className="mr-10 mio-aire" style={{ boxShadow: `0 0 5px ${ iconoAire }`}} />
                        </div>
                        <BotonApagarAire dispositivo={dispositivo} iddispositivos={iddispositivos} setIconoaire={setIconoaire} callback={statusChange}></BotonApagarAire>
                    </div>
                    <div className="d-flex flex-column align-items-center">
                        <div>
                            <CIcon icon={icon.cilDoor} width={35} className="mr-10 mio-aire" style={{ boxShadow: `0 0 5px ${ iconoPuerta }`}} />
                        </div>
                        <BotonApagarPuerta dispositivo={dispositivo} iddispositivos={iddispositivos} setIconoPuerta={setIconoPuerta} callback={statusChange}></BotonApagarPuerta>
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