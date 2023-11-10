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
  });
  const agregarusuario = () => {
    if (!nuevoUsuario.nombre.trim() || !nuevoUsuario.correo.trim() || !nuevoUsuario.clave.trim()) {
      return;
    }

    // Genera un nuevo usuario con los datos proporcionados
    const nuevoUsuarioData = {
        nombre: nuevoUsuario.nombre,
        correo: nuevoUsuario.correo,
        clave: nuevoUsuario.clave
    };

    agregarUsuario(nuevoUsuarioData);
    // Actualiza el estado para agregar el nuevo usuario
    setNuevoUsuario({
      nombre: "",
      correo: "",
      clave: "",
    });
    <CAlert color="success">
      Usuario creado exitosamente
    </CAlert>
  };

  const handleFileChange = (e) => {
    const archivo = e.target.files[0]; // Obtiene el archivo seleccionado
    setArchivoSeleccionado(archivo);

    // Genera una URL de objeto a partir del archivo seleccionado
    const imagenURL = URL.createObjectURL(archivo);
    setNuevoUsuario({ ...nuevoUsuario, imagenURL });
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