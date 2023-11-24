import CIcon from '@coreui/icons-react';
import * as icon from '@coreui/icons';
import {CButton} from '@coreui/react';
import { useState, useEffect } from 'react';
import { COMANDOSAIRE_POST_ENDPOINT } from '../../connections/helpers/endpoints';
import "../../assets/css/index.css";
import axios from 'axios';

const BotonApagarAire = ({dispositivo, iddispositivos, setIconoaire, callback}) => {

  const [backgroundColor, setBackgroundColor] = useState(''); // Estado para el color de fondo
  
  const statusChange= ()=>{
    callback()
  }
  
  useEffect(() => {
    // Actualizar el color del icono y del botón cuando cambie el estado del dispositivo
    const newColor = dispositivo.estadoaire === true ? '#008f39' : '#D50000';
    const iconcolor = dispositivo.estadoaire === true ? '#2962FF' : '#ffffff';
    setBackgroundColor(newColor);
    setIconoaire(iconcolor);
  }, [dispositivo.estadoaire]);

  const handleButtonClick = () => {
    const id = iddispositivos[0].iddispositivo;
    // Cambia el color al hacer clic
    if (backgroundColor === '#D50000') {
        axios.post(`${COMANDOSAIRE_POST_ENDPOINT}/${id}/turnOn`)
        .then(respuesta=>{
            //setUsuariosData(respuesta.data);
            console.log(respuesta);
            setIconoaire('#2962FF');
            statusChange();
        })
        .catch(err=>{
            console.error(err);
        })
        setBackgroundColor('#008f39'); // Cambia a azul claro
    } else {
        axios.post(`${COMANDOSAIRE_POST_ENDPOINT}/${id}/turnOff`)
        .then(respuesta=>{
            //setUsuariosData(respuesta.data);
            console.log(respuesta);
            statusChange();
            setIconoaire('#ffffff');
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

export default BotonApagarAire;