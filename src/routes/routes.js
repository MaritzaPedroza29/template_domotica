import React from 'react'
const AireAcondicionado= React.lazy(()=> import('../views/dispositivos/Airesacondicionados'))
const Usuario= React.lazy(()=> import('../views/pages/Usuarios'))
const Salones = React.lazy(() => import('../views/pages/Salones'))
const Dispositivos = React.lazy(()=> import('../views/pages/Dispositivos'))
const Televisores = React.lazy(()=>import('../views/dispositivos/Televisores'))
const Puertas = React.lazy(()=>import("../views/dispositivos/Puertas"))

const routes = [
  { path: '/dispositivos', exact: true, name: 'Home', element:Dispositivos},
  { path: '/aireacondicionado', name:'AireAcondicionado', element: AireAcondicionado},
  { path: '/usuario', name: 'Usuario', element: Usuario },
  { path: '/salones', name: 'Salones', element: Salones},
  {path: '/dispositivos', name:'Dispositivos', element:Dispositivos},
  {path: '/dispositivos/televisores', name:'Televisores', element:Televisores},
  {path: '/dispositivos/puertas',name:'Puertas', element:Puertas}
]

export default routes
