import React from 'react'

import styles from '../assets/styles/components/Input.module.scss'

const input = () => {
  return (
    <label htmlFor="search">
      <input className={styles.Input} type="text" placeholder="Buscar" id="search" />
    </label>
  )
}

export default input