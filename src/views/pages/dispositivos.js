import {  Card, CCol, CContainer, CRow } from "@coreui/react";
import { useState } from "react";
import { Carddispositivos } from "../componentes/dispositivos/carddispositivos";
import aireacondicionado from "../img/aireacondicionado.png";
import puerta from "../img/puerta.png";
import televisor from "../img/monitor-de-tv.png"

function Dispositivos (){
    const [dispositivos, setDispositivos] = useState([
        {
            "id":1,
            "nombre":"aire A101",
            "imagen":aireacondicionado,
            "estado": 1
        },{
            "id":2,
            "nombre":"Puerta A101",
            "imagen":puerta,
            "estado":0
        },{
            "id":3,
            "nombre":"televisor A101",
            "imagen":televisor,
            "estado":1
        },{
            "id":4,
            "nombre":"televisor A102",
            "imagen":televisor,
            "estado":0
        },{
            "id":5,
            "nombre":"aire A102",
            "imagen":aireacondicionado,
            "estado":0
        },{
            "id":6,
            "nombre":"puerta A102",
            "imagen":puerta,
            "estado":0
        },{
            "id":7,
            "nombre":"televisor A103",
            "imagen":televisor,
            "estado":1
        },{
            "id":8,
            "nombre":"aire A103",
            "imagen":aireacondicionado,
            "estado":1
        },{
            "id":9,
            "nombre":"puerta A103",
            "imagen":puerta,
            "estado":1
        },{
            "id":10,
            "nombre":"televisor A104",
            "imagen":televisor,
            "estado":0
        },{
            "id":11,
            "nombre":"aire A104",
            "imagen":aireacondicionado,
            "estado":0
        },{
            "id":12,
            "nombre":"puerta A104",
            "imagen":puerta,
            "estado":0
        },{
            "id":13,
            "nombre":"televisor A105",
            "imagen":televisor,
            "estado":1
        },{
            "id":14,
            "nombre":"aire A105",
            "imagen":aireacondicionado,
            "estado":1
        },{
            "id":15,
            "nombre":"puerta A105",
            "imagen":puerta,
            "estado":0
        },{
            "id":16,
            "nombre":"plug mini",
            "imagen":puerta,
            "estado":0
        }
    ]);

    const handleEditName = (id, newName) => {
        // Encuentra el dispositivo con el ID y actualiza su nombre
        const updatedDispositivos = dispositivos.map((dispositivo) => {
          if (dispositivo.id === id) {
            return { ...dispositivo, nombre: newName };
          }
          return dispositivo;
        });
    
        setDispositivos(updatedDispositivos);
    };
    
    return (
        <>
            <CContainer className="mt-3 mb-3">
                <h3 className="text-center">Dispositivos</h3>
                <CRow md={4}>
                    {dispositivos.map(dispositivo => <CCol><Carddispositivos key={dispositivo.id} dispositivos={dispositivo} onEditName={handleEditName}/></CCol>)}
                </CRow>
            </CContainer>
        </>
        
    )
}
export {Dispositivos};