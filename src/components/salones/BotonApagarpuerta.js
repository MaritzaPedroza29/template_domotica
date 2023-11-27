import CIcon from '@coreui/icons-react';
import * as icon from '@coreui/icons';
import {CButton} from '@coreui/react';
import { useState, useEffect } from 'react';
import { COMANDOS_POST_ENDPOINT } from '../../connections/helpers/endpoints';
import "../../assets/css/index.css";
import axios from 'axios';


const BotonApagarpuerta = ({dispositivo, iddispositivos, setIconoPuerta, callback}) => {
    console.log(dispositivo);

  const [backgroundColor, setBackgroundColor] = useState(''); // Estado para el color de fondo
  
  const statusChange= ()=>{
    callback()
  }
  
  useEffect(() => {
    // Actualizar el color del icono y del botón cuando cambie el estado del dispositivo
    const newColor = dispositivo.power_puerta === "on" ? '#008f39' : '#D50000';
    const iconcolor = dispositivo.power_puerta === "on" ? '#2962FF' : '#ffffff';
    setBackgroundColor(newColor);
    setIconoPuerta(iconcolor);
  }, [dispositivo.power_puerta]);

  const handleButtonClick = () => {
    const id = iddispositivos[1].iddispositivo;
    console.log(id);

    // Cambia el color al hacer clic
    if (backgroundColor === '#D50000') {
      axios.post(`${COMANDOS_POST_ENDPOINT}/${id}/turnOn`)
        .then(respuesta => {
          console.log(respuesta);
          setIconoPuerta('#2962FF');
          statusChange();

          // Configurar el temporizador para apagar después de un minuto (60000 milisegundos)
          setTimeout(() => {
            handleTurnOff(id);
          }, 60000);
        })
        .catch(err => {
          console.error(err);
        });

      setBackgroundColor('#008f39'); // Cambia a azul claro
    } else {
      handleTurnOff(id);
    }
  };

  const handleTurnOff = (id) => {
    axios.post(`${COMANDOS_POST_ENDPOINT}/${id}/turnOff`)
      .then(respuesta => {
        console.log(respuesta);
        statusChange();
        setIconoPuerta('#ffffff');
      })
      .catch(err => {
        console.error(err);
      });

    setBackgroundColor('#D50000'); // Cambia al color predeterminado
  };

  return (
    <div className='mio-boton-redondo'>
      <CButton  className='' style={{ backgroundColor }} onClick={handleButtonClick}>
        <CIcon icon={icon.cilPowerStandby}/>
      </CButton>
    </div>
  );
};

export default BotonApagarpuerta;