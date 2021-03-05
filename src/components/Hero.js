import React from 'react'
import Link from 'next/link'

import styles from '../assets/styles/components/Hero.module.scss'

const Hero = ({ primaryCover, name, description, followers }) => {
  return (
    <section className={styles.Hero}>
      <figure className={styles.Hero__coverContainer}>
        <img className={styles.Hero__cover} src={primaryCover} width="1142" alt={name} title={name} />
      </figure>
      <div>
        <h1 className={styles.Hero__name}>{name}</h1>
        <p className={styles.Hero__description}>{description}</p>
        <p className={styles.Hero__description}>{followers ? followers : ''} <span>{followers ? 'seguidores' : 'made for Felipe Merchan'}</span></p>
        <Link href="/playlist-details">
          <a className={styles.Hero__button}>Reproducir</a>
        </Link>
      </div>
    </section>
  )
}

export default Hero