import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilDevices,
  cilUser,
  cibGhost,
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const sidebarnav = [
  {
    component: CNavGroup,
    name: 'Dispositivos',
    to: '/dispositivos',
    icon: <CIcon icon={cilDevices} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Aire acondicionado',
        to: '/aireacondicionado',
      },
      {
        component: CNavItem,
        name: 'Puertas',
        to: '/dispositivos/puertas',
      },{
        component: CNavItem,
        name: 'Televisores',
        to: '/dispositivos/televisores',
      },{
        component: CNavItem,
        name: 'Todos',
        to: '/dispositivos',
      },
    ]
  },
  {
    component: CNavItem,
    name: 'Salones',
    to: '/salones',
    icon: <CIcon icon={cibGhost} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Usuarios',
    to: '/usuario',
    icon: <CIcon icon={cilUser} customClassName="nav-icon" />,
  },
]

export default sidebarnav
