import React from 'react';
import '../../assets/css/index.css';

function Cuadrado(salones){
  const  estado  = salones.children.estado;

  let backgroundColor = '#4caf50'; // Establece un color de fondo predeterminado
  let color = '#ffffff';

  if (estado >= 0 && estado < 50) {
    backgroundColor = '#4caf50'; // Verde para valores de 0 a 50
  } else if (estado >= 50 && estado <= 70) {
    backgroundColor = '#ff9800'; // Naranja para valores de 51 a 70
  } else if (estado > 70 && estado <= 100) {
    backgroundColor = '#f41201'; // Rojo para valores de 71 a 100
  }else if(estado == "administrativo"){
    backgroundColor = '#ffffff';
    color = '#000000';
  }
  console.log(salones.children);
  return (
    <div className="mio-cuadrado" style={{ backgroundColor: backgroundColor, color:color }}>{salones.children.salon}</div>
  )
}

export {Cuadrado};