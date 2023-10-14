import React, { useState } from 'react';
import { ChromePicker } from 'react-color';

const Coloresinfo= ()=> {
  const [color, setColor] = useState('#000000');

  function handleColorChange(newColor) {
    setColor(newColor.hex);
  }

  function getColorInfo() {
    switch (color) {
      case '#FF0000':
        return 'El rojo significa peligro.';
      case '#00FF00':
        return 'El verde significa seguridad.';
      case '#FFA500':
        return 'El naranja significa advertencia.';
      default:
        return 'Selecciona un color para obtener información.';
    }
  }

  return (
    <div>
      <ChromePicker color={color} onChange={handleColorChange} />
      <p>{getColorInfo()}</p>
    </div>
  );
}
export default Coloresinfo;