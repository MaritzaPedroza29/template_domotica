import CIcon from '@coreui/icons-react';
import * as icon from '@coreui/icons';
import {CButton} from '@coreui/react';
import { useState, useEffect } from 'react';
import "../../assets/css/index.css";

const Botonapagarpuerta=({puertas})=>{
   const [backgroundColor, setBackgroundColor] = useState('#ffffff'); // Estado para el color de fondo
   useEffect(() => {
    if (puertas.estado === 1) {
      setBackgroundColor('#008F39'); // Cambia a azul claro si el estado es 1
    }
  }, [puertas.estado]);
  const handleButtonClick = () => {
    // Cambia el color al hacer clic
    if (backgroundColor === '#ffffff') {
      setBackgroundColor('#008f39'); // Cambia a azul claro
    } else {
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
}
export default Botonapagarpuerta;