import React from 'react'

import Icon from './icons/Icon'

import styles from '../assets/styles/components/Row.module.scss'

const Row = ({title, artist, album, date, duration }) => {
  return (
    <tr className={styles.Row}>
      <td>
        <div className={styles.Row__play}>
          <Icon icon="Play" size={9} color="white" />
        </div>
        <div className={styles.Row__like}>
          <Icon icon="heart" size={24} color="white" />
        </div>
        <span className={styles.Row__title}>{title}</span>
      </td>
      <td>
        <span className={styles.Row__artist}>{artist}</span>
      </td>
      <td>
        <span className={styles.Row__album}>{album}</span>
        <span className={styles.Row__details}>{date}</span>
        <span className={styles.Row__details}>{duration}</span>
      </td>
    </tr>
  )
}

export default Row