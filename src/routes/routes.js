import React from 'react'
const PartidosCreados= React.lazy(()=> import('../views/pages/PartidosCreados'))
const Inicio= React.lazy(()=> import('../views/pages/Inicio'))
const Usuario= React.lazy(()=> import('../views/pages/usuarios'))
const Salones = React.lazy(() => import('../views/pages/salones'))
const Accordion = React.lazy(() => import('../views/base/accordion/Accordion'))

const routes = [
  { path: '/', exact: true, name: 'Home'},
  { path: '/partidoscreados', name: 'PartidosCreados', element: PartidosCreados },
  { path: '/inicio', name:'Inicio', element: Inicio},
  { path: '/usuario', name: 'Usuario', element: Usuario },
  { path: '/salones', name: 'Salones', element: Salones}
]

export default routes
