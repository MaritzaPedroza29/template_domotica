import { CCol, CContainer, CRow } from "@coreui/react";
import  CardUsuario from "../../components/usuarios/CardUsuarios";
import { useState, useEffect } from "react";
import  BotonCrear  from "../../components/usuarios/BotonCrear";
import  ModalCrearUsuario  from "../../components/usuarios/Modalcrearusuario";
import {SIGNUP_GET_ENDPOINT} from "../../connections/helpers/endpoints";
import { CREARUSUARIOS_POST_ENDPOINT } from "../../connections/helpers/endpoints";
import { ELIMINARUSUARIOS_DELETE_ENDPOINT } from "../../connections/helpers/endpoints";
import axios from "axios";


const Usuarios= ()=>{
  const [mostrarModal, setMostrarModal] = useState(false);
  const [errores, setErrores]= useState({});
  const [usuariosdata, setUsuariosData] = useState([]);
  
  const fetchData = async () => {
    try {
      console.log("llama a la función");
      const respuesta = await axios.get(SIGNUP_GET_ENDPOINT);
      
      if (respuesta.data) {
        setUsuariosData(respuesta.data);
      } else {
        console.log('La respuesta no contiene datos.');
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []); // Llamar a fetchData cuando el componente monta
  
    const agregarUsuario = async (nuevoUsuario) => {
      const errores={};
      setErrores(errores);

      axios.post(CREARUSUARIOS_POST_ENDPOINT,(nuevoUsuario)
      ).then(response=>{
          console.log(response);
      })
      .catch(error=>{
        setErrores({new:error.response.data.message});
      })
    };
    
      const eliminarUsuario = async (id) => {
        axios.delete(`${ELIMINARUSUARIOS_DELETE_ENDPOINT}/${id}`)
        .then(respuesta=>{
          console.log(respuesta);
        })
        .catch(err=>{
          console.error(err);
        })
        console.log(id);
        /*const index = usuariosdata.findIndex((usuario) => usuario.data.id === id);
        if (index !== -1) {
          const nuevosUsuarios = [...usuariosdata];
          nuevosUsuarios.splice(index, 1);
          setUsuariosData(nuevosUsuarios);
        }*/
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
        <BotonCrear abrirModal={abrirModal}></BotonCrear>
        <ModalCrearUsuario mostrarModal={mostrarModal} cerrarModal={cerrarModal} agregarUsuario={agregarUsuario} usuarios={usuariosdata}/>
        <CRow className="justify-content-md-center">
            {usuariosdata.map(usuario => {
              console.log('Datos del usuario:', usuario);
              return <CCol sm="12" md="8" lg="6"><CardUsuario key={usuario.id} usuarios={usuario} eliminarUsuario={eliminarUsuario} agregarUsuario={agregarUsuario} actualizarUsuario={actualizarUsuario}/></CCol>;
            })}
        </CRow>
        </CContainer>
    </>     
)
}

export default Usuarios