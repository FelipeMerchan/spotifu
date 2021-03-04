import React from 'react'

import Icon from './icons/Icon'

import styles from '../assets/styles/components/Row.module.scss'

const Row = () => {
  return (
    <tr className={styles.Row}>
      <td>
        <div className={styles.Row__play}>
          <Icon icon="Play" size={9} color="white" />
        </div>
        <div className={styles.Row__like}>
          <Icon icon="heart" size={24} color="white" />
        </div>
        <span className={styles.Row__name}>Koala - Radio Edit</span>
      </td>
      <td>
        <span className={styles.Row__artist}>Oliver Heldens</span>
      </td>
      <td>
        <span className={styles.Row__album}>Last All Night</span>
        <span className={styles.Row__details}>2020-11-02</span>
        <span className={styles.Row__details}>3:16</span>
      </td>
    </tr>
  )
}

export default Row