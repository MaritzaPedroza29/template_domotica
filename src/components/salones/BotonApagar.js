import CIcon from '@coreui/icons-react';
import * as icon from '@coreui/icons';
import {CButton} from '@coreui/react';
import { useState, useEffect } from 'react';
import { COMANDOS_POST_ENDPOINT } from '../../connections/helpers/endpoints';
import "../../assets/css/index.css";
import axios from 'axios';

const BotonApagar = ({dispositivo, iddispositivos, setIconColor, callback}) => {
  console.log(dispositivo);

  const [backgroundColor, setBackgroundColor] = useState(''); // Estado para el color de fondo
  
  const statusChange= ()=>{
    callback()
  }
  useEffect(() => {
    // Actualizar el color del icono y del botón cuando cambie el estado del dispositivo
    const newColor = dispositivo.power === 'on' ? '#008f39' : '#D50000';
    const iconcolor = dispositivo.power === 'on' ? '#2962FF' : '#ffffff';
    setBackgroundColor(newColor);
    setIconColor(iconcolor);
  }, [dispositivo.power]);

  const handleButtonClick = () => {
    const id = iddispositivos[2].iddispositivo;
    // Cambia el color al hacer clic
    if (backgroundColor === '#D50000') {
        axios.post(`${COMANDOS_POST_ENDPOINT}/${id}/turnOn`)
        .then(respuesta=>{
            //setUsuariosData(respuesta.data);
            console.log(respuesta);
            setIconColor('#2962FF');
            statusChange();
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
            statusChange();
            setIconColor('#ffffff');
        })
        .catch(err=>{
            console.error(err);
        })
      setBackgroundColor('#D50000'); // Cambia al color predeterminado
    }
  };

  return (
    <div className='mio-boton-redondo'>
      <CButton  className='' style={{ backgroundColor }} onClick={handleButtonClick}>
        <CIcon icon={icon.cilPowerStandby}/>
      </CButton>
    </div>
  );
};

export default BotonApagar;