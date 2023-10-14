import { CModalBody, CModalHeader, CModalTitle, CModal, CModalFooter, CButton } from '@coreui/react';
import {CFormGroup, CFormLabel, CInputGroup,CFormInput,CForm} from '@coreui/react';
import React, { useState, useEffect } from 'react';

const ModalCrearUsuario= ({ mostrarModal, cerrarModal, agregarUsuario, usuarios })=> {
  const [nuevoUsuario, setNuevoUsuario] = useState({
    nombre: "",
    correo: "",
  });
  const agregarusuario = () => {
    if (!nuevoUsuario.nombre.trim() || !nuevoUsuario.correo.trim()) {
      return;
    }

    // Genera un nuevo usuario con los datos proporcionados
    const nuevoUsuarioData = {
      usuario: "Usuario" + (usuarios.length + 1),
      data: {
        id: usuarios.length + 1,
        imagen: "./img/user.png",
        nombre: nuevoUsuario.nombre,
        correo: nuevoUsuario.correo,
      },
    };

    agregarUsuario(nuevoUsuarioData);
    // Actualiza el estado para agregar el nuevo usuario
    setNuevoUsuario({
      nombre: "",
      correo: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    agregarusuario();
  };
    return (
      <CModal show={mostrarModal} onHide={cerrarModal}>
        <CForm onSubmit={handleSubmit}>
          <CModalHeader closeButton>
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
              />
            </div>
          </CModalBody>
          <CModalFooter>
            <CButton  type="submit" variant="success">Guardar</CButton>
            <CButton onClick={cerrarModal} variant='danger'>Cerrar</CButton>
            {/* Otros botones o acciones */}
          </CModalFooter>
        </CForm>
      </CModal>
      );
}

export default ModalCrearUsuario