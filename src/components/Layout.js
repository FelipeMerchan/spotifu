import React from 'react'
import NavBar from './NavBar'
import BottomPlayer from './BottomPlayer'

const Layout = ({ children }) => {
  return (
    <>
      <NavBar />
      {children}
      <BottomPlayer />
    </>
  )
}

export default Layout