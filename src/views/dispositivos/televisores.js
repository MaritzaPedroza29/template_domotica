import {  Card, CCol, CContainer, CRow } from "@coreui/react";
import CardTelevisores from "../../components/dispositivos/cardtelevisores";
import televisores from "../../connections/televisores";
import { useState, useEffect } from "react";

const Televisor= ()=>{
    const [televisoresdata, setTelevisoresdata] = useState([]);
    useEffect(()=>{
        setTelevisoresdata(televisores);
    }, []);


    return (
            <CContainer className="mt-3 mb-3">
                <h3 className="text-center">Televisores</h3>
                <CRow>
                    {televisoresdata.map(televisor => <CCol><CardTelevisores key={televisor.id} televisores={televisor}/></CCol>)}
                </CRow>
            </CContainer>
    )
}
export default Televisor;