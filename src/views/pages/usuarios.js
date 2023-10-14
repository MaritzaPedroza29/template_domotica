import { CCol, CContainer, CRow } from "@coreui/react";
import  Cardusuario from "../../components/usuarios/cardusuarios";
import { useState, useEffect } from "react";
import  Botoncrear  from "../../components/usuarios/Botoncrear";
import  ModalCrearUsuario  from "../../components/usuarios/modalcrearusuario";
import usuarios from "../../connections/usuarios";


const Usuarios= ()=>{
  const [mostrarModal, setMostrarModal] = useState(false);
  const [usuariosdata, setUsuariosData] = useState([]);
  useEffect(()=>{
    setUsuariosData(usuarios);
}, []);
    const agregarUsuario = (nuevoUsuario) => {
        setUsuariosData([...usuariosdata, nuevoUsuario]);
      };
    
      const eliminarUsuario = (id) => {
        const index = usuariosdata.findIndex((usuario) => usuario.data.id === id);
        if (index !== -1) {
          const nuevosUsuarios = [...usuariosdata];
          nuevosUsuarios.splice(index, 1);
          setUsuariosData(nuevosUsuarios);
        }
      };
    const abrirModal = () => {
        setMostrarModal(true);
      };
    
      const cerrarModal = () => {
        setMostrarModal(false);
      };    
return(
    <>
        <CContainer className="mt-3 mb-3">
        <h3 className="text-center">Usuarios</h3>
            <Botoncrear abrirModal={abrirModal} ></Botoncrear>
            <ModalCrearUsuario mostrarModal={mostrarModal} cerrarModal={cerrarModal} agregarUsuario={agregarUsuario} usuarios={usuarios}/>
            <CRow className="justify-content-md-center">
                    {usuariosdata.map(usuario => <CCol sm="12" md="8" lg="6"><Cardusuario key={usuario.id} usuarios={usuario} eliminarUsuario={eliminarUsuario} agregarUsuario={agregarUsuario}/></CCol>)}
            </CRow>
        </CContainer>
    </>     
)
}

export default Usuarios