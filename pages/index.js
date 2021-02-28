import React from 'react'

import Playlists from '../src/components/Playlists'
import styles from '../src/assets/styles/pages/index.module.scss'

const Home = () => {
  return (
    <>
      <main className={styles.Home}>
        <h1>Inicio</h1>
        <Playlists className={styles.section} />
        <Playlists />
      </main>
    </>
  )
}

export default Home