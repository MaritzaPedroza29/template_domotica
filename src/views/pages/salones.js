import { CCol, CContainer, CRow } from "@coreui/react";
import Select from "../../components/salones/selectescenarios";
import  Cardescenarios  from "../../components/salones/cardescenarios";
import { useState, useEffect} from "react";
import salones_bloques from "../../connections/salonesbloques";
import Botoncrear  from "../../components/salones/botoncrear";
import  Modalcrearsalon  from "../../components/salones/modalcrearsalon";

const Salones= ()=>{
    const [selectedOptionInfo, setSelectedOptionInfo] = useState([]);
    const [mostrarModal, setMostrarModal] = useState(false);
    const [salones, setSalones] = useState([]);
    useEffect(()=>{
        setSalones(salones_bloques);
    }, []);

    const opcionselect = (salonesSeleccionados) => {
        console.log(typeof(salones));
        console.log(salonesSeleccionados);
        setSelectedOptionInfo(salonesSeleccionados);
    };
    const agregarSalones = (nuevosSalones) => {
        // Clonar el arreglo de salones para no mutar el estado directamente
        const nuevosSalonesData = [...salones];

        // Encuentra el índice del bloque al que deseas agregar el nuevo salón
        const bloqueIndex = nuevosSalonesData.findIndex((bloque) => bloque.bloque === nuevosSalones.bloque);

        if (bloqueIndex !== -1) {
            // Agrega el nuevo salón al subarreglo de salones dentro del bloque
            nuevosSalones[bloqueIndex].data.salones.push({
            id: nuevosSalones[bloqueIndex].data.salones.length + 1,
            nombresalon: nuevosSalones.nombre,
            dispositivos: "3 dispositivos",
            aire_acondicionado: nuevosSalones.aire_acondicionado,
            televisor: nuevosSalones.televisor,
            puerta: nuevosSalones.puerta,
            });
        }

        // Actualiza el estado con el nuevo arreglo de salones
        setSalones(nuevosSalones);
    };
    const abrirModal = () => {
        console.log("hola mundo");
        setMostrarModal(true);
      };
    
      const cerrarModal = () => {
        setMostrarModal(false);
      };    
    return(
        <>
            <CContainer className="mt-3 mb-3">
                <h3 className="text-center">Salones</h3>
                <Botoncrear abrirModal={abrirModal}></Botoncrear>
                <Modalcrearsalon mostrarModal={mostrarModal} cerrarModal={cerrarModal} salones={salones} agregarSalon={agregarSalones}></Modalcrearsalon>
                <p>Seleccione una de las opciones</p>
                <Select salones={salones} opcionselect={opcionselect} className="mt-2"></Select>
                <CRow className="justify-content-md-center">
                {selectedOptionInfo ? (
                    selectedOptionInfo.map((selectinfo) =><CCol sm="12" md="8" lg="6"><Cardescenarios informacion={selectinfo}/></CCol>)
                ) : (
                    <></> // Esto representa un fragmento vacío, es decir, no renderiza nada.
                )}
                </CRow>
            </CContainer>
        </>
    )
}
export default Salones;
