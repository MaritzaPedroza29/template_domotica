import { CCard, CButton, CCardBody, CCardTitle, CRow, CCol } from '@coreui/react';
import '../../assets/css/index.css';
import  BotonApagar from './BotonApagar';
import { useParams } from 'react-router-dom';
import { useState } from 'react';

const CardDispositivos= ({dispositivos, onEditName})=>{
    const [isEditing, setIsEditing] = useState(false);
    const [editedName, setEditedName] = useState(dispositivos.nombre);
    const [dispositivosdata, setDispositivosdata] = useState(); // Tu array de dispositivos
    const { salon } = useParams();

  const toggleDeviceState = (salonIndex, dispositivoIndex) => {
    // Crear una copia del array de dispositivos
    const newDispositivos = [...dispositivos];

    // Cambiar el estado del dispositivo en base a los índices
    newDispositivos[salonIndex].dispositivos[dispositivoIndex].estado =
      newDispositivos[salonIndex].dispositivos[dispositivoIndex].estado === 1 ? 0 : 1;

    // Actualizar el estado con el nuevo array
    setDispositivosdata(newDispositivos);
  };
    console.log(dispositivos);
    const handleNameClick = () => {
        setIsEditing(true);
      };
    
      const handleNameChange = (event) => {
        setEditedName(event.target.value);
      };
    
      const handleNameSave = () => {
        onEditName(dispositivos.id, editedName);
        setIsEditing(false);
      };
    console.log(dispositivos);
    return (
      <CRow>
      {dispositivos.data.salones.map((salon, salonIndex) =>
        salon.dispositivos.map((dispositivo, dispositivoIndex) => (
          <CCol>
          <CCard key={dispositivo.id} className='mio-carddispositivos'>
            <CCardBody>
              <img src={dispositivo.imagen} alt="" className="mio-iconos" />
              <CCardTitle onClick={handleNameClick}>{dispositivo.nombre}</CCardTitle>
              <BotonApagar dispositivos={dispositivos} salonIndex={salonIndex}
              dispositivoIndex={dispositivoIndex}
              onToggleState={toggleDeviceState} />
            </CCardBody>
          </CCard>
          </CCol>
        ))
      )}
    </CRow>
      );
}
export default CardDispositivos;