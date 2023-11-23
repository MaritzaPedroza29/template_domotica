import CIcon from '@coreui/icons-react';
import * as icon from '@coreui/icons';
import {CButton} from '@coreui/react';
import { useState, useEffect } from 'react';
import { COMANDOS_POST_ENDPOINT } from '../../connections/helpers/endpoints';
import "../../assets/css/index.css";
import axios from 'axios';

const BotonApagarAire = ({dispositivo, iddispositivos, setIconoaire}) => {
  console.log(iddispositivos);

  const [backgroundColor, setBackgroundColor] = useState(''); // Estado para el color de fondo

  useEffect(() => {
    // Actualizar el color del icono y del botón cuando cambie el estado del dispositivo
    const newColor = dispositivo.power === 'on' ? '#008f39' : '#D50000';
    const iconcolor = dispositivo.power === 'on' ? '#2962FF' : '#ffffff';
    setBackgroundColor(newColor);
    setIconoaire(iconcolor);
  }, [dispositivo.power]);

  const handleButtonClick = () => {
    const id = iddispositivos[1].iddispositivo;
    // Cambia el color al hacer clic
    if (backgroundColor === '#D50000') {
        axios.post(`${COMANDOS_POST_ENDPOINT}/${id}/turnOn`)
        .then(respuesta=>{
            //setUsuariosData(respuesta.data);
            setIconoaire('#2962FF');
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