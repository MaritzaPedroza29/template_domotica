import React from 'react'
const AireAcondicionado= React.lazy(()=> import('../views/dispositivos/airesacondicionados'))
const Usuario= React.lazy(()=> import('../views/pages/usuarios'))
const Salones = React.lazy(() => import('../views/pages/salones'))
const Dispositivos = React.lazy(()=> import('../views/pages/dispositivos'))
const Televisores = React.lazy(()=>import('../views/dispositivos/televisores'))
const Puertas = React.lazy(()=>import("../views/dispositivos/puertas"))

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
