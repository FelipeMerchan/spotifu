import React from 'react'

import Playlists from '../src/components/Playlists'
import Carousel from '../src/components/Carousel'
import CarouselItem from '../src/components/CarouselItem'

import data from '../data.json'

import styles from '../src/assets/styles/pages/index.module.scss'

const Home = () => {
  return (
    <>
      <main className={styles.Home}>
        <h1>Inicio</h1>
        <Playlists title="Top playlists">
          <Carousel>
            {
              data.topPlaylist.map(playlist =>
                <CarouselItem
                  key={playlist.id}
                  {...playlist}
                />
              )
            }
          </Carousel>
        </Playlists>
        <Playlists title="Escuchado recientemente">
          <Carousel>
            {
              data.escuchadoRecientemente.map(playlist =>
                <CarouselItem
                  key={playlist.id}
                  {...playlist}
                />
              )
            }
          </Carousel>
        </Playlists>
      </main>
    </>
  )
}

export default Home