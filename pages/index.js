import React, { useState, useEffect } from 'react'

import Playlists from '../src/components/Playlists'
import Carousel from '../src/components/Carousel'
import CarouselItem from '../src/components/CarouselItem'

import styles from '../src/assets/styles/pages/index.module.scss'

const Home = () => {
  const [ playlists, setPlaylists ] = useState([])

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/FelipeMerchan/spotifu/main/data.json')
      .then(response => response.json())
      .then(data => setPlaylists(data))
  }, [])

  console.log(playlists)

  return (
    <>
      <main className={styles.Home}>
        <h1>Inicio</h1>
        <Playlists title="Top playlists" className={styles.section}>
          <Carousel>
{/*             {
              playlists.topPlaylist.map(playlist => {
                <CarouselItem
                  key={playlist.id}
                  {...playlist}
                />
              })
            } */}
          </Carousel>
        </Playlists>
      </main>
    </>
  )
}

export default Home