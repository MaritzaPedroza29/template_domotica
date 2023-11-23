import { CContainer , CCardBody, CRow, CCol } from '@coreui/react'
import  Rectangulo  from "../../components/inicio/Rectagulo";
import { useState, useEffect} from "react";
import  CardBloques from "../../components/inicio/botonbloques";
import salones from '../../connections/salones';


const AireAcondicionado= ()=>{
    const [selectedCard, setSelectedCard] = useState(null);
    const [salonesdata, setSalonesdata] = useState([]);
    useEffect(()=>{
        setSalonesdata(salones);
    }, []);

    const handleCardClick = (salones) => {
        console.log(salones);
        setSelectedCard([salones]);
    };
    return(
            <CContainer className="mt-3 mb-3">
                <h3 className="text-center">Aire Acondicionado</h3>
                <CCardBody className="text-center justify-content-center align-items-center">
                <CRow md={4}>
                    {salonesdata.map(salon => <CCol><CardBloques key={salon.data.id} salones={salon}  onClick={handleCardClick}/></CCol>)}
                </CRow>
                {selectedCard ? (
                    selectedCard.map((cardb) => <Rectangulo bloque={cardb}></Rectangulo>)
                ) : (
                    <></> // Esto representa un fragmento vacío, es decir, no renderiza nada.
                )}
                </CCardBody>
            </CContainer>
    )
}

export default AireAcondicionado