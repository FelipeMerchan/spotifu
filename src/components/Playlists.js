import React from 'react'

import styles from '../assets/styles/components/Playlists.module.scss'

const Playlists = ({ children, title }) => {
  return (
    <div className={styles.Playlists}>
      <h2 className={styles.Playlists__title}>{title}</h2>
      <hr />
      {children}
    </div>
  )
}

export default Playlists