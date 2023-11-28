import { CCol, CContainer, CRow } from "@coreui/react";
import { OBTENERSALONES_GET_ENDPOINT } from "../../connections/helpers/endpoints";
import { OBTENERIDDISPOSITIVOS_GET_ENDPOINT } from "../../connections/helpers/endpoints";
import { OBTENERINFODISPOSITIVOS_GET_ENDPOINT } from "../../connections/helpers/endpoints";
import CardSalon from "../../components/salones/Cardsalon";
import axios from "axios";
import SelectSalones from "../../components/salones/SelecteSalones";
import  CardSalones  from "../../components/salones/Cardsalones";
import { useState, useEffect} from "react";
import salones_bloques from "../../connections/salonesbloques";
import BotonCrear  from "../../components/salones/BotonCrear";
import  ModalCrearSalon  from "../../components/salones/ModalCrearSalon";
import { CREAR_POST_SALON } from "../../connections/helpers/endpoints";

const Salones= ()=>{
    const [selectedOptionInfo, setSelectedOptionInfo] = useState([]);
    const [errores, setErrores]= useState({});
    const [mostrarModal, setMostrarModal] = useState(false);
    const [salones, setSalones] = useState([]);
    const [iddispositivos, setIddispositivos] = useState([]);
    const [dispositivos, setDispositivos] = useState([]);
    const [change, setChange]= useState(false)

   
    useEffect(()=>{
        axios.get(OBTENERSALONES_GET_ENDPOINT)
        .then(response=>{
            setSalones(response.data);
        })
        .catch(err=>{
            console.error(err);
        })
    }, []);
    console.log(salones);
    useEffect(()=>{
        axios.get(OBTENERIDDISPOSITIVOS_GET_ENDPOINT)
        .then(response=>{
            setIddispositivos(response.data);
        })
        .catch(err=>{
            console.error(err);
        })
    }, [change]);
    console.log(iddispositivos);
    useEffect(()=>{
        console.log('Efecto secundario ejecutado');
        axios.get(OBTENERINFODISPOSITIVOS_GET_ENDPOINT)
        .then(response => {
          setDispositivos(response.data)
            //setSearching(false)
        }).catch(err => {
            console.error(err)
            //setSearching(false)
        })
    }, [change]);
  
  
    const statusChange = ()=>{
        setChange(!change)
    }
    console.log(dispositivos);
    /*const opcionselect = (salonesSeleccionados) => {
        console.log(salonesSeleccionados);
        setSelectedOptionInfo(salonesSeleccionados);
    };*/
    const agregarSalones = (nuevosSalones) => {
        const errores={};
        setErrores(errores);
        axios.post(CREAR_POST_SALON,(nuevosSalones)
      ).then(response=>{
        //fetchData();
        //setUsuariosData(response.data);
          console.log(response);
      })
      .catch(error=>{
        setErrores({new:error.response.data.message});
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
                <h3 className="text-center">Salones</h3>
                <BotonCrear abrirModal={abrirModal}></BotonCrear>
                <ModalCrearSalon  mostrarModal={mostrarModal} cerrarModal={cerrarModal} salones={salones} iddispositivos={iddispositivos} agregarSalones={agregarSalones}></ModalCrearSalon>
                <CRow>
                    {salones.map((salon) =><CCol><CardSalon salon={salon} dispositivo={dispositivos} iddispositivos={iddispositivos} callback={statusChange}/></CCol>)}
                </CRow>
            </CContainer>
        </>
    )
}
export default Salones;
