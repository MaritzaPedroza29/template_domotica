import { CModalBody, CModalHeader, CModalTitle, CModal, CModalFooter, CButton } from '@coreui/react';
import { CAlert } from '@coreui/react'
import {CFormGroup, CFormLabel, CInputGroup,CFormInput,CForm} from '@coreui/react';
import React, { useState, useEffect } from 'react';

const ModalCrearUsuario= ({ mostrarModal, cerrarModal, agregarUsuario, usuarios })=> {
  console.log(mostrarModal);
  const  [visible, setVisible] = useState(false)
  const [archivoSeleccionado, setArchivoSeleccionado] = useState(null);
  const [nuevoUsuario, setNuevoUsuario] = useState({
    nombre: "",
    correo: "",
    clave: "",
    imagenURL: "",
  });
  const agregarusuario = () => {
    if (!nuevoUsuario.nombre.trim() || !nuevoUsuario.correo.trim() || !nuevoUsuario.clave.trim()) {
      return;
    }

    // Genera un nuevo usuario con los datos proporcionados
    const nuevoUsuarioData = {
        nombre: nuevoUsuario.nombre,
        correo: nuevoUsuario.correo,
        clave: nuevoUsuario.clave,
        imagen: nuevoUsuario.imagenURL
    };

    agregarUsuario(nuevoUsuarioData);
    // Actualiza el estado para agregar el nuevo usuario
    setNuevoUsuario({
      nombre: "",
      correo: "",
      clave: "",
      imagenURL: ""
    });
    <CAlert color="success">
      Usuario creado exitosamente
    </CAlert>
  };

  const handleFileChange = (e) => {
    const archivo = e.target.files[0]; // Obtiene el archivo seleccionado
    
    // Crea una instancia de FileReader
    const reader = new FileReader();

    // Configura el evento load para ejecutar cuando la lectura esté completa
    reader.onloadend = () => {
      // La URL del archivo local se encuentra en reader.result
      const imagenURL = reader.result;
      console.log(imagenURL);
      setNuevoUsuario({ ...nuevoUsuario, imagenURL });
    };

    // Lee el archivo como una URL de datos
    reader.readAsDataURL(archivo);

    setArchivoSeleccionado(archivo);

    // Genera una URL de objeto a partir del archivo seleccionado
    /*const imagenURL = URL.createObjectURL(archivo);
    console.log(imagenURL);
    setNuevoUsuario({ ...nuevoUsuario, imagenURL });*/
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    agregarusuario();
  };
    return (
      <CModal
        alignment="center"
        visible={mostrarModal}
        onClose={() => setVisible(false)}
        aria-labelledby="VerticallyCenteredExample"
      >
        <CForm onSubmit={handleSubmit}>
          <CModalHeader onClose={cerrarModal}>
            <CModalTitle>Crear usuario</CModalTitle>
          </CModalHeader>
          <CModalBody>
            <div className="mb-3">
              <CFormLabel>Nombre</CFormLabel>
              <CFormInput
                type="Text"
                placeholder="Ingrese el nombre"
                value={nuevoUsuario.nombre}
                onChange={(e) =>
                  setNuevoUsuario({ ...nuevoUsuario, nombre: e.target.value })
                }
              />
            </div>
            <div className="mb-3">
              <CFormLabel>Correo</CFormLabel>
              <CFormInput
                type="email"
                placeholder="Ingrese su correo"
                value={nuevoUsuario.correo}
                onChange={(e) =>
                  setNuevoUsuario({ ...nuevoUsuario, correo: e.target.value })
                }
              />
            </div>
            <div className="mb-3" controlId="formBasicPassword">
              <CFormLabel>Contraseña</CFormLabel>
              <CFormInput
                type="password"
                placeholder="Ingrese su contraseña"
                onChange={(e) =>
                  setNuevoUsuario({ ...nuevoUsuario, clave: e.target.value })
                }
              />
            </div>
            <CInputGroup>
              <CFormInput type="file" id="inputGroupFile04" aria-describedby="inputGroupFileAddon04" aria-label="Upload" onChange={handleFileChange}/>
              <CButton type="button" color="secondary" variant="outline" id="inputGroupFileAddon04" onClick={() => console.log(archivoSeleccionado ? archivoSeleccionado.name : 'Ningún archivo seleccionado')}>Guardar</CButton>
            </CInputGroup>
          </CModalBody>
          <CModalFooter>
            <CButton  type="submit" color="success">Guardar</CButton>
            <CButton onClick={cerrarModal} color='danger'>Cerrar</CButton>
            {/* Otros botones o acciones */}
          </CModalFooter>
        </CForm>
      </CModal>
      );
}

export default ModalCrearUsuario