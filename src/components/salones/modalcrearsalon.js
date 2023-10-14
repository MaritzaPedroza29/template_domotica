import { CModal, CForm, CButton, CListGroup, CModalHeader, CModalTitle, CModalBody, CFormLabel, CFormSelect, CListGroupItem, CFormCheck, CModalFooter, CFormInput} from '@coreui/react';
import { useState } from 'react';

const Modalcrearsalon= ({mostrarModal, cerrarModal, salones, agregarSalon})=>{
    const [nuevoSalon, setNuevoSalon] = useState({
        nombre: "",
        aire_acondicionado: false,
        televisor: false,
        puerta: false,
        bloque: "1",
    });
        console.log(salones);

        const agregarsalon = () => {
            if (!nuevoSalon.nombre.trim() || (!nuevoSalon.aire_acondicionado && !nuevoSalon.televisor && !nuevoSalon.puerta)) {
              return;
            }
          
            let aireacondicionado = false;
            let televisor = false;
            let puerta = false;
          
            if (nuevoSalon.aire_acondicionado) {
              aireacondicionado = salones[0].data.salones[0].aire_acondicionado;
            }
            if (nuevoSalon.televisor) {
              televisor = salones[0].data.salones[0].televisor;
            }
            if (nuevoSalon.puerta) {
              puerta = salones[0].data.salones[0].puerta;
            }
          
            const bloqueIndex = salones.findIndex((salon) => salon.bloque === nuevoSalon.bloque);
          
            if (bloqueIndex !== -1) {
              const nuevosSalones = [...salones];
              
              // Calcula el nuevo ID basado en la longitud de la lista de salones
              const nuevoID = nuevosSalones[bloqueIndex].data.salones.length + 1;
              
              // Genera un nuevo salón con el nuevo ID
              const nuevoSalonData = {
                id: nuevoID,
                nombresalon: nuevoSalon.nombre,
                dispositivos: "3 dispositivos",
                aire_acondicionado:aireacondicionado,
                televisor:televisor,
                puerta:puerta,
              };
          
              nuevosSalones[bloqueIndex].data.salones.push(nuevoSalonData);
              
              // Actualiza el estado con los nuevos salones
              setNuevoSalon(nuevosSalones);
              agregarSalon(nuevosSalones);
              // Restablece el estado para agregar el nuevo salón
              setNuevoSalon({
                nombre: "",
                aire_acondicionado: false,
                televisor: false,
                puerta: false,
                bloque: "1",
              });
            }
          };

    const handleSubmit = (e) => {
        e.preventDefault();
        agregarsalon();
    };
return(
    <CModal show={mostrarModal} onHide={cerrarModal}>
        <CForm onSubmit={handleSubmit}>
          <CModalHeader closeButton>
            <CModalTitle>Crear Salón</CModalTitle>
          </CModalHeader>
          <CModalBody>
          <div className="mb-3">
              <CFormLabel>Ingrese nombre del salón</CFormLabel>
              <CFormInput
                type="Text"
                placeholder="Ingrese el nombre del salón"
                value={nuevoSalon.nombre}
                onChange={(e) =>
                    setNuevoSalon({ ...nuevoSalon, nombre: e.target.value })
                  }
              />
            </div>
            <div className="mb-3">
              <CFormLabel>Seleccioneel bloque</CFormLabel>
              <CFormSelect aria-label="Default select example" value={nuevoSalon.bloque} onChange={(e)=>
                setNuevoSalon({...nuevoSalon, bloque: e.target.value })
                }>
                    <option value={salones[0].bloque}>{salones[0].bloque}</option>
                    <option value={salones[1].bloque}>{salones[1].bloque}</option>
                    <option value={salones[2].bloque}>{salones[2].bloque}</option>
                </CFormSelect>
            </div>
            <CFormLabel>Seleccione los dispositivos que desea vincular</CFormLabel>
            <CListGroup>
                <CListGroupItem>
                    <CFormCheck aria-label="option 1" label="aire acondicionado A106" checked={nuevoSalon.aire_acondicionado} onChange={(e)=>
                        setNuevoSalon({...nuevoSalon, aire_acondicionado:e.target.value})
                    }/>
                    <img
                        src={salones[0].data.salones[0].aire_acondicionado}
                        alt=""
                        className='mio-iconos'
                    />
                </CListGroupItem>
                <CListGroupItem><CFormCheck aria-label="option 2" label="televisor A106" checked={nuevoSalon.televisor} onChange={(e)=>
                        setNuevoSalon({...nuevoSalon, televisor:e.target.value})
                    }/>
                <img
                    src={salones[0].data.salones[0].televisor}
                    alt=""
                    className='mio-iconos'
                />
                </CListGroupItem>
                <CListGroupItem><CFormCheck aria-label="option 3" label="puerta A106" checked={nuevoSalon.puerta} onChange={(e)=>
                        setNuevoSalon({...nuevoSalon, puerta:e.target.value})
                    }/>
                <img
                    src={salones[0].data.salones[0].puerta}
                    alt=""
                    className='mio-iconos'
                />
                </CListGroupItem>
            </CListGroup>      
          </CModalBody>
          <CModalFooter>
            <CButton  type="submit" variant="success">Guardar</CButton>
            <CButton onClick={cerrarModal} variant='danger'>Cerrar</CButton>
          </CModalFooter>
        </CForm>
</CModal>
)
}
export default Modalcrearsalon;