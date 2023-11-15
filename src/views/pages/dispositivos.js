import {  Card, CCol, CContainer, CRow } from "@coreui/react";
import Dispositivos_data from "../../connections/dispositivos";
import { useState, useEffect } from "react";
import CardDispositivos from "../../components/dispositivos/CardDispositivos";
import { OBTENERIDDISPOSITIVOS_GET_ENDPOINT } from "../../connections/helpers/endpoints";
import {APIDEVICE_POST_ENDPOINT} from "../../connections/helpers/endpoints"
import axios from "axios";

 const Dispositivos= ()=> {
    const [dispositivosdata, setDispositivosdata] = useState([]);
    const [dispositivos, setDispositivos] = useState([]);
    useEffect(()=>{
        axios.get(OBTENERIDDISPOSITIVOS_GET_ENDPOINT)
        .then(response=>{
            //setUsuariosData(response.data);
            setDispositivos(response.data);
        })
        .catch(err=>{
            console.error(err);
        })
        setDispositivosdata(Dispositivos_data);
    }, []);
    
    console.log(dispositivos);
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