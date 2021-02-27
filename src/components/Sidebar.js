import React from 'react'
import Link from 'next/link'

import Icon from './icons/Icon'

import styles from '../assets/styles/components/Sidebar.module.scss'

const Sidebar = () => {
  return (
    <div className={styles.Sidebar}>
      <div>
        <figure className={styles.Sidebar__brandContainer}>
          <img className={styles.Sidebar__brand} src="https://res.cloudinary.com/dy1xcx7kw/image/upload/v1614407317/spotifu/spotifu_bzmkeo.svg" width="114" alt="Logotipo de Spotifu" title="Logotipo de Spotifu" />
        </figure>
        <nav className={styles.Sidebar__menu}>
          <li className={styles.Sidebar__menu__active}>
            <Link href="/">
              <a><Icon icon="Home-filled" size={20} color="white" /><span>Inicio</span></a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a><Icon icon="Search-small" size={20} color="#7D7D7D" /><span>Buscar</span></a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a><Icon icon="Credit-card" size={20} color="#7D7D7D" /><span>Premium</span></a>
            </Link>
          </li>

          <h3 className={styles.Sidebar__title}>Tu Biblioteca</h3>
          <li>
            <Link href="/">
              <a>Creada para ti</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>Escuchado recientemente</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>Tus Me Gusta</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>Artistas</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>Podcasts</a>
            </Link>
          </li>
        </nav>
      </div>
      <figure className={styles.Sidebar__songContainer}>
        <img className={styles.Sidebar__song} src="https://res.cloudinary.com/dy1xcx7kw/image/upload/v1614410053/spotifu/tujamo-enough-of-you_2x_meiyi0.jpg" width="224" alt="Tujamo - Enough Of You" />
      </figure>
    </div>
  )
}

export default Sidebar
