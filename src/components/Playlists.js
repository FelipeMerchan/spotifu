import React from 'react'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"

import Playlist from './Playlist'
import styles from '../assets/styles/components/Playlists.module.scss'

const Playlists = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    width: 166,
    arrows: true,
    className: "Slider"
  };

  return (
    <div className={styles.Playlists}>
      <h2 className={styles.Playlists__title}>Top playlist</h2>
      <hr />
      <Slider {...settings} className={styles.Slider}>
        <div>
          <Playlist
            cover="https://res.cloudinary.com/dy1xcx7kw/image/upload/v1614472991/spotifu/playlists/oliver-heldens_2x_ldt7kl.jpg"
            name="This Is Oliver Heldens"
            description="This is Oliver Heldens. The essential tracks, all in one playlist."
            followers="44,476"
          />
        </div>
        <div>
          <Playlist
            cover="https://res.cloudinary.com/dy1xcx7kw/image/upload/v1614475328/spotifu/playlists/tchami_2x_dbfeqw.jpg"
            name="This Is Tchami"
            description="This is Tchami. The essential tracks, all in one playlist."
            followers="15,379"
          />
        </div>
        <div>
          <Playlist
            cover="https://res.cloudinary.com/dy1xcx7kw/image/upload/v1614472991/spotifu/playlists/oh_2x_esmfxl.jpg"
            name="Release Radar"
            description="Catch all the latest music from artists you follow."
          />
        </div>
        <div>
          <Playlist
            cover="https://res.cloudinary.com/dy1xcx7kw/image/upload/v1614472992/spotifu/playlists/boris-brejcha_2x_rbjiq3.jpg"
            name="This Is Tchami"
            description="This is Tchami. The essential tracks, all in one playlist."
            followers="15,379"
          />
        </div>
        <div>
          <Playlist
            cover="https://res.cloudinary.com/dy1xcx7kw/image/upload/v1614472992/spotifu/playlists/the-weeknd_2x_aveinp.jpg"
            name="This Is Tchami"
            description="This is Tchami. The essential tracks, all in one playlist."
            followers="15,379"
          />
        </div>
        <div>
          <Playlist
            cover="https://res.cloudinary.com/dy1xcx7kw/image/upload/v1614472991/spotifu/playlists/disclosure_2x_bn2rj2.jpg"
            name="This Is Tchami"
            description="This is Tchami. The essential tracks, all in one playlist."
            followers="15,379"
          />
        </div>
        <div>
          <Playlist
            cover="https://res.cloudinary.com/dy1xcx7kw/image/upload/v1614472991/spotifu/playlists/disclosure_2x_bn2rj2.jpg"
            name="This Is Tchami"
            description="This is Tchami. The essential tracks, all in one playlist."
            followers="15,379"
          />
        </div>
      </Slider>
    </div>
  )
}

export default Playlists