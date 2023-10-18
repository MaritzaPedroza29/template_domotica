import { CContainer , CCardBody, CRow, CCol } from '@coreui/react'
import  Rectangulo  from "../../components/inicio/rectaguloinicio";
import { useState, useEffect} from "react";
import  Cardbloques from "../../components/inicio/botonbloques";
import salones from '../../connections/salones';


const Inicio= ()=>{
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
                    {salonesdata.map(salon => <CCol><Cardbloques key={salon.data.id} salones={salon}  onClick={handleCardClick}/></CCol>)}
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

export default Inicio