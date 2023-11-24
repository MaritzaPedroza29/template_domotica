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

const Salones= ()=>{
    const [selectedOptionInfo, setSelectedOptionInfo] = useState([]);
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
    }, []);

    useEffect(()=>{
        axios.get(OBTENERINFODISPOSITIVOS_GET_ENDPOINT)
        .then(response=>{
            setDispositivos(response.data);
        })
        .catch(err=>{
            console.error(err);
        })
        console.log("Obteniendo información de dispositivos...");
    }, [change]);
    
      const statusChange = ()=>{
        console.log(!change);
        setChange(!change)
      }
    console.log(dispositivos);
    /*const opcionselect = (salonesSeleccionados) => {
        console.log(salonesSeleccionados);
        setSelectedOptionInfo(salonesSeleccionados);
    };
    const agregarSalones = (nuevosSalones) => {
        // Clonar el arreglo de salones para no mutar el estado directamente
        const nuevosSalonesData = [...salonesdata];
    
        // Encuentra el índice del bloque al que deseas agregar el nuevo salón
        const bloqueIndex = nuevosSalonesData.findIndex((bloque) => bloque.bloque === nuevosSalones.bloque);
    
        if (bloqueIndex !== -1) {
            // Agrega el nuevo salón al subarreglo de salones dentro del bloque
            nuevosSalonesData[bloqueIndex].data.salones.push({
                id: nuevosSalonesData[bloqueIndex].data.salones.length + 1,
                nombresalon: nuevosSalones.nombre,
                dispositivos: "3 dispositivos",
                aire_acondicionado: nuevosSalones.aire_acondicionado,
                televisor: nuevosSalones.televisor,
                puerta: nuevosSalones.puerta,
            });
        }
    
        // Actualiza el estado con el nuevo arreglo de salones
        setSalonesdata(nuevosSalonesData);
    };
    
    const abrirModal = () => {
        setMostrarModal(true);
      };
    
      const cerrarModal = () => {
        setMostrarModal(false);
      }; */   
    return(
        <>
            <CContainer className="mt-3 mb-3">
                <h3 className="text-center">Salones</h3>
                <CRow>
                    {salones.map((salon) =><CCol><CardSalon salon={salon} dispositivo={dispositivos} iddispositivos={iddispositivos} callback={statusChange}/></CCol>)}
                </CRow>
            </CContainer>
        </>
    )
}
export default Salones;
