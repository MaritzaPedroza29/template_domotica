import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPowerOff } from '@fortawesome/free-solid-svg-icons';
import Button from 'react-bootstrap/Button';
import { useState, useEffect } from 'react';
import "../../css/index.css";

function Botonapagar ({dispositivos}) {
    console.log(dispositivos);
    const [backgroundColor, setBackgroundColor] = useState('#ffffff'); // Estado para el color de fondo
    
    useEffect(() => {
        if (dispositivos.estado === 1) {
          setBackgroundColor('#90CAF9'); // Cambia a azul claro si el estado es 1
        }
      }, [dispositivos.estado]);
    
      const handleButtonClick = () => {
        // Cambia el color al hacer clic
        if (backgroundColor === '#ffffff') {
          setBackgroundColor('#90CAF9'); // Cambia a azul claro
        } else {
          setBackgroundColor('#ffffff'); // Cambia al color predeterminado
        }
      };
    
    return(
        <div className='mio-boton-redondo'>
            <Button className='' style={{ backgroundColor }} onClick={handleButtonClick}>
                <FontAwesomeIcon icon={faPowerOff} />
            </Button>
        </div>
    )
}
export {Botonapagar}

