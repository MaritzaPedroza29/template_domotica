import CIcon from '@coreui/icons-react';
import * as icon from '@coreui/icons';
import {CButton} from '@coreui/react';
import { useState, useEffect } from 'react';
import { COMANDOS_POST_ENDPOINT } from '../../connections/helpers/endpoints';
import "../../assets/css/index.css";
import axios from 'axios';

const BotonApagar = ({dispositivo, iddispositivos}) => {
  console.log(iddispositivos);

  const [backgroundColor, setBackgroundColor] = useState('#ffffff'); // Estado para el color de fondo

  useEffect(() => {
    if (dispositivo.power === "on") {
      setBackgroundColor('#008F39'); // Cambia a azul claro si el estado es 1
    }
  }, [dispositivo.estado]);

  const handleButtonClick = () => {
    const id = iddispositivos[1].iddispositivo;
    // Cambia el color al hacer clic
    if (backgroundColor === '#ffffff') {
        axios.post(`${COMANDOS_POST_ENDPOINT}/${id}/turnOn`)
        .then(respuesta=>{
            //setUsuariosData(respuesta.data);
            console.log(respuesta);
        })
        .catch(err=>{
            console.error(err);
        })
        setBackgroundColor('#008f39'); // Cambia a azul claro
    } else {
        console.log(typeof(id));
        axios.post(`${COMANDOS_POST_ENDPOINT}/${id}/turnOff`)
        .then(respuesta=>{
            //setUsuariosData(respuesta.data);
            console.log(respuesta);
        })
        .catch(err=>{
            console.error(err);
        })
      setBackgroundColor('#ffffff'); // Cambia al color predeterminado
    }
  };

  return (
    <div className='mio-boton-redondo'>
      <CButton className='' style={{ backgroundColor }} onClick={handleButtonClick}>
        <CIcon icon={icon.cilPowerStandby} />
      </CButton>
    </div>
  );
};

export default BotonApagar;