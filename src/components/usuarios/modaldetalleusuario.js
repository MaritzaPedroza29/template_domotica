import { useState } from 'react';
import {CForm, CModalHeader, CModalTitle, CModalBody, CModalFooter, CFormInput, CFormLabel, CButton, CFormText, CFormSwitch} from '@coreui/react';
import {CModal} from '@coreui/react';


const ModalDetalleUsuario= ({show, handleClose, userData, agregarUsuario, eliminarUsuarios,handleSwitchChange, actualizarUsuario, callback})=>{
    const [disabled, setDisabled] = useState(true);
    const  [visible, setVisible] = useState(false)
    const [nuevoNombre, setNuevoNombre] = useState("");
    const [nuevoCorreo, setNuevoCorreo] = useState("");
    const [switchValue, setSwitchValue] = useState("");

    console.log(userData);
    console.log(show);
    let correo = ''; // Declarar correo fuera del bloque if
    let nombre = ''; // Declarar nombre fuera del bloque if
    let usuario = '';
    let idusuario = '';
    if (userData) {
        // Accede a userData.data aquí
        correo = userData.correo;
        nombre = userData.nombre;
        usuario = userData.usuario;
        idusuario = userData.idusuario;
        // ...
      } else {
        // Maneja el caso en que userData o userData.data sea nulo
        console.error('userData es null o no tiene la propiedad data');
        // Puedes tomar medidas adecuadas aquí, como mostrar un mensaje de error o realizar alguna otra acción necesaria.
      }
      
        const handleGuardarClick = () => {
          if (!nuevoNombre.trim() || !nuevoCorreo.trim()) {
            return;
          }
      
          // Genera un nuevo usuario con los datos proporcionados
          const nuevoUsuarioData = {
              idusuario: idusuario,
              nombre: nuevoNombre,
              correo: nuevoCorreo,
          };
      
          // Llama a la función updateUser para actualizar el usuario en el componente principal
          actualizarUsuario(nuevoUsuarioData);
          statusChange();
      
          // Resto del código...
        };
        
      const handleClick = () => {
        eliminarUsuarios(userData.idusuario);
      };
      const statusChange= ()=>{
        callback()
      }
      const handleSubmit = (e) => {
        e.preventDefault();
        handleGuardarClick();
      };

    return (
      <CModal alignment="center" visible={show} onClose={() => setVisible(false)} aria-labelledby="VerticallyCenteredExample">
          <CForm onSubmit={handleSubmit}>
            <CModalHeader onClose={handleClose}>
              <CModalTitle>Detalle usuario</CModalTitle>
            </CModalHeader>
            <CModalBody>
              <div className="mb-3">
                <CFormLabel>Nombre</CFormLabel>
                <CFormInput
                  type="Text"
                  placeholder="Ingrese el nombre"
                  value={disabled ? nombre : nuevoNombre} // Utiliza el valor de nombre aquí
                  onChange={(e) => setNuevoNombre(e.target.value)}
                  onClick={() => setDisabled(false)}
                />
              </div>
              <div className="mb-3">
                <CFormLabel>Correo</CFormLabel>
                <CFormInput
                  type="email"
                  placeholder="Ingrese su correo"
                  value={disabled ? correo : nuevoCorreo} // Utiliza el valor de nombre aquí
                  onChange={(e) => setNuevoCorreo(e.target.value)}
                  onClick={() => setDisabled(false)}
                />
              </div>
            </CModalBody>
            <CModalFooter>
              <CButton  type="submit" color="success">Guardar</CButton>
              <CButton color='danger' onClick={handleClick}>Eliminar</CButton>
              {/* Otros botones o acciones */}
            </CModalFooter>
          </CForm>
        </CModal>
        );
}
export default ModalDetalleUsuario;