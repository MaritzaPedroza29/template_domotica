import { CButton } from '@coreui/react'
import CIcon from '@coreui/icons-react';
import * as icon from '@coreui/icons';
import { useState } from 'react';

const Botoncrear= ({abrirModal}) =>{
    console.log(abrirModal);
    return(
        <div className='mio-botoncrear'>
            <CButton className='' onClick={abrirModal}>
                <CIcon icon={icon.cilMedicalCross} />
            </CButton>
        </div>
    )
}

export default Botoncrear;