import React from 'react'
import { useSelector } from 'react-redux'
import { CSidebar, CSidebarBrand, CSidebarNav } from '@coreui/react'
import { CImage } from '@coreui/react'
import logo from '../assets/images/smartfesc.jpg'
import "../assets/css/index.css"
import { AppSidebarNav } from './sidebar/AppSidebarNav'
import imagen from "../assets/images/smartfesc.jpg"


import items from '../utils/sidebarnav'


const AppSidebar = () => {
  const sidebarShow = useSelector((state) => state.sidebarShow)
  const customStyles = {
    backgroundColor: "#000000",
    padding: '10px',

  };

  return (
    <CSidebar
      position="fixed"
      visible={sidebarShow}
    >
      <CSidebarBrand className="d-none d-md-flex" to="/" style={customStyles}>
        <CImage rounded src={logo} width={100} height={50} />
      </CSidebarBrand>
      <CSidebarNav>
          <AppSidebarNav items={items} />
      </CSidebarNav>
    </CSidebar>
  )
}

export default React.memo(AppSidebar)
