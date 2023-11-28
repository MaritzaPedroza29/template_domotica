import { CModal, CForm, CButton, CListGroup, CModalHeader, CModalTitle, CModalBody, CFormLabel, CFormSelect, CListGroupItem, CFormCheck, CModalFooter, CFormInput} from '@coreui/react';
import { useState } from 'react';

const ModalCrearSalon= ({mostrarModal, cerrarModal, salones, iddispositivos,agregarSalones})=>{
  console.log(salones);
  const [nuevoSalon, setNuevoSalon] = useState({
    nombre: "", 
    idusuario: 2,
    dispositivosSeleccionados: []
  });

  const handleDispositivoChange = (dispositivo) => {
    const { id } = dispositivo;

    // Comprobar si el dispositivo ya está en la lista
    if (nuevoSalon.dispositivosSeleccionados.includes(id)) {
      // Si está, quitarlo de la lista
      setNuevoSalon((prevSalon) => ({
        dispositivosSeleccionados: prevSalon.dispositivosSeleccionados.filter(
          (dispositivoId) => dispositivoId !== id
        ),
      }));
    } else {
      // Si no está, agregarlo a la lista
      setNuevoSalon((prevSalon) => ({
        dispositivosSeleccionados: [...prevSalon.dispositivosSeleccionados, id],
      }));
    }
  };
    /*const [nuevoSalon, setNuevoSalon] = useState({
        nombre: "",
        aire_acondicionado: false,
        televisor: false,
        puerta: false,
        bloque: "1",
    });*/
    const  [visible, setVisible] = useState(false);
        console.log(iddispositivos);
        
        const agregarsalon = () => {
          console.log(nuevoSalon);
          
            if (!nuevoSalon.nombre.trim()) {
              return;
            }
          
            /*let aireacondicionado = false;
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
              const nuevoID = nuevosSalones[bloqueIndex].data.salones.length + 1;*/
              
              // Genera un nuevo salón con el nuevo ID
              const nuevoSalonData = {
                nombre_salon:nuevoSalon.nombre,
                idusuario:nuevoSalon.idusuario
              };
          
              //nuevosSalones[bloqueIndex].data.salones.push(nuevoSalonData);
              
              // Actualiza el estado con los nuevos salones
              setNuevoSalon(nuevoSalonData);
              agregarSalones(nuevoSalonData);
              // Restablece el estado para agregar el nuevo salón
              setNuevoSalon({
                nombre: "",
                idusuario: ""
              });
            }
    const handleSubmit = (e) => {
        e.preventDefault();
        agregarsalon();
    }
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
            <CListGroup>
      {iddispositivos.map((dispositivo, index) => (
        <CListGroupItem key={index}>
          <div className='mio-lista'>
            <CFormCheck
              aria-label={`option ${index + 1}`}
              checked={nuevoSalon.dispositivosSeleccionados.includes(dispositivo.id)}
              onChange={() => handleDispositivoChange(dispositivo)}
            />
            <label className='mio-listalabel'>{dispositivo.nombre_dispositivo}</label>
          </div>
        </CListGroupItem>
      ))}
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
export default ModalCrearSalon;