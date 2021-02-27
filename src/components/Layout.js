import React from 'react'

import Header from './Header'
import Sidebar from './Sidebar'
import BottomPlayer from './BottomPlayer'

import styles from '../assets/styles/components/Layout.module.scss'

const Layout = ({ children }) => {
  return (
    <div className={styles.Layout}>
      <Sidebar />
      <div className={styles.primary}>
        <Header />
        {children}
      </div>
      <BottomPlayer />
    </div>
  )
}

export default Layout