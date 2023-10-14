import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilDescription,
  cilUser,
  cibGhost,
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const sidebarnav = [
  {
    component: CNavItem,
    name: 'Usuarios',
    to: '/usuario',
    icon: <CIcon icon={cilUser} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Salones',
    to: '/salones',
    icon: <CIcon icon={cibGhost} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Docs',
    href: 'https://coreui.io/react/docs/templates/installation/',
    icon: <CIcon icon={cilDescription} customClassName="nav-icon" />,
  },
]

export default sidebarnav
