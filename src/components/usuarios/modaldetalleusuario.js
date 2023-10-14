import { useState } from 'react';
import {CForm, CModalHeader, CModalTitle, CModalBody, CModalFooter,  CInputGroup, CFormLabel, CButton} from '@coreui/react';
import {CModal} from '@coreui/react';


const Modaldetalleusuario= ({show, handleClose, userData, agregarUsuario})=>{
    const [disabled, setDisabled] = useState(true);
    const [nuevoNombre, setNuevoNombre] = useState("");
    const [nuevoCorreo, setNuevoCorreo] = useState("");
    console.log(show);

    console.log(userData);

    let correo = ''; // Declarar correo fuera del bloque if
    let nombre = ''; // Declarar nombre fuera del bloque if
    let usuario = '';
    let idusuario = '';
    let imagen = '';
    if (userData && userData.data) {
        // Accede a userData.data aquí
        correo = userData.data.correo;
        nombre = userData.data.nombre;
        usuario = userData.usuario;
        idusuario = userData.data.id;
        imagen = userData.data.imagen;
        console.log(imagen);
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
          usuario: usuario,
          data: {
            id: idusuario,
            imagen: imagen,
            nombre: nuevoNombre,
            correo: nuevoCorreo,
          },
        };
        console.log(nuevoUsuarioData);
        agregarUsuario(nuevoUsuarioData);
        // Actualiza el estado para agregar el nuevo usuario
        setNuevoNombre({
          nombre: "",
        });
        setNuevoCorreo({correo:""});
      };
      const handleSubmit = (e) => {
        e.preventDefault();
        handleGuardarClick();
      };

    return (
        <CModal show={show} onHide={handleClose}>
          <CForm onSubmit={handleSubmit}>
            <CModalHeader closeButton>
              <CModalTitle>Detalle usuario</CModalTitle>
            </CModalHeader>
            <CModalBody>
              <div className="mb-3">
                <CFormLabel>Nombre</CFormLabel>
                <CInputGroup
                  type="Text"
                  placeholder="Ingrese el nombre"
                  value={disabled ? nombre : nuevoNombre} // Utiliza el valor de nombre aquí
                  onChange={(e) => setNuevoNombre(e.target.value)}
                  onClick={() => setDisabled(false)}
                />
              </div>
              <div className="mb-3">
                <CFormLabel>Correo</CFormLabel>
                <CInputGroup
                  type="email"
                  placeholder="Ingrese su correo"
                  value={disabled ? correo : nuevoCorreo} // Utiliza el valor de nombre aquí
                  onChange={(e) => setNuevoCorreo(e.target.value)}
                  onClick={() => setDisabled(false)}
                />
              </div>
            </CModalBody>
            <CModalFooter>
              <CButton  type="submit" variant="success">Guardar</CButton>
              {/* Otros botones o acciones */}
            </CModalFooter>
          </CForm>
        </CModal>
        );
}
export default Modaldetalleusuario;