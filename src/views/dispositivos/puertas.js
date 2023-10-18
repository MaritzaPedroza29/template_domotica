import {  Card, CCol, CContainer, CRow } from "@coreui/react";
import Cardpuertas from "../../components/dispositivos/cardpuertas";
import puertas from "../../connections/puertas";
import { useState, useEffect } from "react";

const Puerta= ()=> {
    const [puertasdata, setTelevisoresdata] = useState([]);
    useEffect(()=>{
        setTelevisoresdata(puertas);
    }, []);


    return (
            <CContainer className="mt-3 mb-3">
                <h3 className="text-center">Televisores</h3>
                <CRow>
                    {puertasdata.map(puerta => <CCol><Cardpuertas key={puerta.id} puertas={puerta}/></CCol>)}
                </CRow>
            </CContainer>
    )
}
export default Puerta;