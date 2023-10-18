import React from 'react'
import { useSelector } from 'react-redux'
import { CSidebar, CSidebarBrand, CSidebarNav } from '@coreui/react'
import { CImage } from '@coreui/react'
import logo from '../assets/images/smartfesc.jpg'
import "../assets/css/index.css"
import { AppSidebarNav } from './sidebar/AppSidebarNav'



import items from '../utils/sidebarnav'


const AppSidebar = () => {
  const sidebarShow = useSelector((state) => state.sidebarShow)
  const customStyles = {
    // Aquí puedes definir tus estilos
    backgroundColor: '#a4130e',
    padding: '10px',
    // Agrega más estilos según tus necesidades
  };
  

  return (
    <CSidebar
      position="fixed"
      visible={sidebarShow}
    >
      <CSidebarBrand className="d-none d-md-flex" style={customStyles} to="/">
        <CImage rounded src={logo} width={110} height={50} />
      </CSidebarBrand>
      <CSidebarNav className='mio-sidebar'>
          <AppSidebarNav items={items} />
      </CSidebarNav>
    </CSidebar>
  )
}

export default React.memo(AppSidebar)
