import { CButton, CCard, CCardBody } from '@coreui/react'
import  Cardsalones from "./cardsalones";
import { useState } from "react";

const Cardbloques= ({salones,  onClick })=>{
    
    console.log(salones);
    let bloques = '';
    if (salones && salones.bloque) {
        bloques = salones.bloque;
    }
    return (
                /*<CCard className="mio-cardbloques" >
                    <CCardBody>{bloques}</CCardBody>
                </CCard>*/
                <div className='mio-botones'>
                    <CButton onClick={() => onClick(salones)}>{bloques}</CButton>
                </div>
         );
}
export default Cardsalones;