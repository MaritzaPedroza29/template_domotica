import { CModal, CForm, CButton, CListGroup, CModalHeader, CModalTitle, CModalBody, CFormLabel, CFormSelect, CListGroupItem, CFormCheck, CModalFooter, CFormInput} from '@coreui/react';
import { useState } from 'react';

const Modalcrearsalon= ({mostrarModal, cerrarModal, salones, agregarSalon})=>{
  console.log(salones);
    const [nuevoSalon, setNuevoSalon] = useState({
        nombre: "",
        aire_acondicionado: false,
        televisor: false,
        puerta: false,
        bloque: "1",
    });
    const  [visible, setVisible] = useState(false);
        console.log(salones);

        const agregarsalon = () => {
            if (!nuevoSalon.nombre.trim() || (!nuevoSalon.aire_acondicionado && !nuevoSalon.televisor && !nuevoSalon.puerta)) {
              return;
            }
          
            let aireacondicionado = false;
            let televisor = false;
            let puerta = false;
          
            if (nuevoSalon.aire_acondicionado) {
              aireacondicionado = salones[0].data.salones[0].dispositivos[0].aire_acondicionado;
            }
            if (nuevoSalon.televisor) {
              televisor = salones[0].data.salones[0].dispositivos[1].televisor;
            }
            if (nuevoSalon.puerta) {
              console.log(salones[0].data.salones[0]);
              puerta = salones[0].data.salones[0].dispositivos[2].puerta;
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
                dispositivos: [
                  {id: 1,
                    nombre:"aire_acondicionado A106",
                    estado: 1,
                    aire_acondicionado:aireacondicionado
                  },{
                    id: 2,
                    nombre:"Televisor A106",
                    estado: 1,
                    televisor:televisor
                  },{
                    id: 3,
                    nombre:"Puerta A106",
                    estado: 1,
                    puerta:puerta
                  }
                  
                ],
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
  <CModal alignment="center" visible={mostrarModal} onClose={() => setVisible(false)} aria-labelledby="VerticallyCenteredExample">
        <CForm onSubmit={handleSubmit}>
          <CModalHeader onClose={cerrarModal}>
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
              <CFormSelect aria-label="Default select example" value={nuevoSalon.bloque} onChange={(e)=>
                setNuevoSalon({...nuevoSalon, bloque: e.target.value })
                }>
                    <option value={4}>Seleccione el bloque</option>
                    <option value={salones[0].bloque}>{salones[0].bloque}</option>
                    <option value={salones[1].bloque}>{salones[1].bloque}</option>
                    <option value={salones[2].bloque}>{salones[2].bloque}</option>
                </CFormSelect>
            </div>
            <CListGroup>
                <CListGroupItem>
                <div>
                  <div className='mio-lista'>
                    <CFormCheck
                      aria-label="option 1"
                      checked={nuevoSalon.aire_acondicionado}
                      onChange={(e) =>
                        setNuevoSalon({ ...nuevoSalon, aire_acondicionado: e.target.value })
                      }
                    />
                    <label className='mio-listalabel'>aire acondicionado A106</label>
                    <img
                      src={salones[0].data.salones[0].dispositivos[0].aire_acondicionado}
                      alt=""
                      className="mio-iconolista"
                    />
                  </div>
                </div>
                </CListGroupItem>
                <CListGroupItem>
                  <div className='mio-lista'>
                    <CFormCheck aria-label="option 2" checked={nuevoSalon.televisor} onChange={(e)=>
                          setNuevoSalon({...nuevoSalon, televisor:e.target.value})
                      }/>
                    <label className='mio-listalabel'>Televisor A106</label>
                    <img
                      src={salones[0].data.salones[0].dispositivos[1].televisor}
                      alt=""
                      className='mio-iconolista'
                    />
                  </div>
                </CListGroupItem>
                <CListGroupItem>
                  <div className='mio-lista'>
                    <CFormCheck aria-label="option 3"  checked={nuevoSalon.puerta} onChange={(e)=>
                          setNuevoSalon({...nuevoSalon, puerta:e.target.value})
                      }/>
                      <label className='mio-listalabel'>puerta A106</label>
                    <img
                      src={salones[0].data.salones[1].dispositivos[2].puerta}
                      alt=""
                      className='mio-iconolista'
                    />
                  </div>
                </CListGroupItem>
            </CListGroup>      
          </CModalBody>
          <CModalFooter>
            <CButton  type="submit" color="success">Guardar</CButton>
            <CButton onClick={cerrarModal} color='danger'>Cerrar</CButton>
          </CModalFooter>
        </CForm>
</CModal>
)
}
export default Modalcrearsalon;