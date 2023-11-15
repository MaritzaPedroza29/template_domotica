import { CCol, CContainer, CRow } from "@coreui/react";
import  CardUsuario from "../../components/usuarios/CardUsuarios";
import { useState, useEffect } from "react";
import  BotonCrear  from "../../components/usuarios/BotonCrear";
import  ModalCrearUsuario  from "../../components/usuarios/Modalcrearusuario";
import {SIGNUP_GET_ENDPOINT} from "../../connections/helpers/endpoints";
import { CREARUSUARIOS_POST_ENDPOINT } from "../../connections/helpers/endpoints";
import { ELIMINARUSUARIOS_DELETE_ENDPOINT } from "../../connections/helpers/endpoints";
import { ACTUALIZARUSUARIO_PATCH_ENDPOINT } from "../../connections/helpers/endpoints";
import usuarios from "../../connections/usuarios";
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
        fetchData();
        //setUsuariosData(response.data);
          console.log(response);
      })
      .catch(error=>{
        setErrores({new:error.response.data.message});
      })
    };
    
      const eliminarUsuario = async (id) => {
        console.log(id);
        axios.delete(`${ELIMINARUSUARIOS_DELETE_ENDPOINT}/${id}`)
        .then(respuesta=>{
          fetchData();
          //setUsuariosData(respuesta.data);
          console.log(respuesta);
        })
        .catch(err=>{
          console.error(err);
        })
      };
      const actualizarUsuario= async (nuevoUsuario) => {
        console.log(nuevoUsuario);
        let id = '';
        id = nuevoUsuario.idusuario;
        axios.patch(`${ACTUALIZARUSUARIO_PATCH_ENDPOINT}/${id}`,nuevoUsuario)
        .then(respuesta=>{
          fetchData();
          console.log(respuesta);
        })
        .catch(err=>{
          console.error(err);
        })
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