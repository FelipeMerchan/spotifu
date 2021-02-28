import React from 'react'
import Icon from './icons/Icon'

import styles from '../assets/styles/components/Playlist.module.scss'

const Playlist = ({ cover, name, description, followers }) => {
  return (
    <article className={styles.Playlist}>
      <figure className={styles.Playlist__imageContainer}>
        <div className={styles.Playlist__gradient}></div>
        <div className={styles.Playlist__bg}>
          <span>
            <Icon icon="Play" size={20} color="white" />
          </span>
        </div>
        <img className={styles.Playlist__image} src={cover} width="166" alt={name}/>
      </figure>
      <h3 className={styles.Playlist__title}>{name}</h3>
      <p className={styles.Playlist__description}>{description}</p>
      <p className={styles.Playlist__description}>{followers ? followers : ''} <span>{followers ? 'seguidores' : 'made for Felipe Merchan'}</span></p>
    </article>
  )
}

export default Playlist