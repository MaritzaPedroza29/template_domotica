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
      const actualizarUsuario= (nuevoUsuario) => {
        console.log(nuevoUsuario);
        // Encuentra el índice del usuario actual en tu arreglo de usuarios
        const userIndex = usuariosdata.findIndex((usuario) => usuario.data.id === nuevoUsuario.data.id);
        console.log(userIndex);
        if (userIndex !== -1) {
          // Clona el arreglo de usuarios para evitar mutaciones
          const updatedUsers = [...usuariosdata];
          // Actualiza el usuario en el arreglo
          updatedUsers[userIndex] = nuevoUsuario;
          // Llama a la función para actualizar el usuario en el componente principal
          setUsuariosData(updatedUsers);
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
                    {usuariosdata.map(usuario => <CCol sm="12" md="8" lg="6"><Cardusuario key={usuario.id} usuarios={usuario} eliminarUsuario={eliminarUsuario} agregarUsuario={agregarUsuario} actualizarUsuario={actualizarUsuario}/></CCol>)}
            </CRow>
        </CContainer>
    </>     
)
}

export default Usuarios