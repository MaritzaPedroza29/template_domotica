import { CButton } from '@coreui/react'


const CardBloques= ({salones,  onClick })=>{
    
    console.log(salones);
    let bloques = '';
    if (salones && salones.bloque) {
        bloques = salones.bloque;
    }
    return (
                <div className='mio-botones'>
                    <CButton onClick={() => onClick(salones)}>{bloques}</CButton>
                </div>
         );
}
export default CardBloques;