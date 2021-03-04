import React from 'react'

import styles from '../assets/styles/components/HeaderTable.module.scss'

const HeaderTable = () => {
  return (
    <thead className={styles.HeaderTable}>
      <tr>
        <th>Título</th>
        <th>Artista</th>
        <th>Album</th>
      </tr>
    </thead>
  )
}

export default HeaderTable