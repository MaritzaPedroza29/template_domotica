import {  Card, CCol, CContainer, CRow } from "@coreui/react";
import Dispositivos_data from "../../connections/dispositivos";
import { useState, useEffect } from "react";
import Carddispositivos from "../../components/dispositivos/carddispositivos";

 const Dispositivos= ()=> {
    const [dispositivosdata, setDispositivosdata] = useState([]);
    useEffect(()=>{
        setDispositivosdata(Dispositivos_data);
    }, []);

    const handleEditName = (id, newName) => {
        // Encuentra el dispositivo con el ID y actualiza su nombre
        const updatedDispositivos = dispositivosdata.map((dispositivo) => {
          if (dispositivo.id === id) {
            return { ...dispositivo, nombre: newName };
          }
          return dispositivo;
        });
    
        setDispositivosdata(updatedDispositivos);
    };
    
    return (
        <>
            <CContainer className="mt-3 mb-3">
                <h3 className="text-center">Dispositivos</h3>
                <CRow>
                    {dispositivosdata.map(dispositivo => <CCol><Carddispositivos key={dispositivo.id} dispositivos={dispositivo} onEditName={handleEditName}/></CCol>)}
                </CRow>
            </CContainer>
        </>
        
    )
}
export default Dispositivos;