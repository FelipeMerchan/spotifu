import React from 'react'

import styles from '../assets/styles/components/PlaylistHeader.module.scss'

const PlaylistHeader = ({ coverMediumSize, name, description, followers }) => {
  return (
    <article className={styles.PlaylistHeader}>
      <figure className={styles.PlaylistHeader__coverContainer}>
        <img className={styles.PlaylistHeader__cover} src={coverMediumSize} width="312" alt={name} title={name} />
      </figure>
      <div>
        <h1 className={styles.PlaylistHeader__name}>{name}</h1>
        <p className={styles.PlaylistHeader__description}>{description}</p>
        <p className={styles.PlaylistHeader__description}>{followers ? followers : ''} <span>{followers ? 'seguidores' : 'made for Felipe Merchan'}</span></p>
        <button className={styles.PlaylistHeader__button} type="button">Reproducir</button>
      </div>
    </article>
  )
}

export default PlaylistHeader