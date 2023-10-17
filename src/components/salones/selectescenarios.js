import { CFormSelect } from '@coreui/react'
import { useState } from 'react';

const Select= ({salones, opcionselect})=>{
    const [selectOption, setSelecteOption] = useState([]);
    console.log(salones);

    const Selectcambio = (event) => {
        const selectedValue = event.target.value;
        console.log(typeof(selectedValue));
        const salonesSeleccionados = salones.filter((salon) => salon.data.id === parseInt(selectedValue));
        if (salonesSeleccionados) {
            setSelecteOption(selectedValue);
            //setSelectedOptionInfo(salonSeleccionado);
            console.log(typeof(salonesSeleccionados));
            } else {
            console.error(`No se encontró ningún salón con el ID: ${selectedValue}`);
            }

        // Llama a la función onOptionSelected y pasa la información de la opción seleccionada
        opcionselect([salonesSeleccionados]);
    };
    return (
        <CFormSelect aria-label="Default select example" onChange={Selectcambio} value={selectOption}>
            <option>Seleccione una de las opciones</option>
            {salones.map((salon, index) => (
                <option value={salon.data.id}>{salon.bloque}</option>
            ))}
        </CFormSelect>
      );
}
export default Select;