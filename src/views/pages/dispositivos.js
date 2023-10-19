import {  Card, CCol, CContainer, CRow } from "@coreui/react";
import Dispositivos_data from "../../connections/dispositivos";
import { useState, useEffect } from "react";
import CardDispositivos from "../../components/dispositivos/CardDispositivos";

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
            <CContainer className="mt-3 mb-3 .mio-contenedordispositivos">
                <h3 className="text-center">Dispositivos</h3>
                <CRow className="justify-content-between">
                    {dispositivosdata.map(dispositivo => <CCol><CardDispositivos key={dispositivo.id} dispositivos={dispositivo} onEditName={handleEditName}/></CCol>)}
                </CRow>
            </CContainer>
        
    )
}
export default Dispositivos;