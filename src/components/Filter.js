import React from 'react'

import Icon from './icons/Icon'

import styles from '../assets/styles/components/Filter.module.scss'

const Filter = () => {
  return (
    <div className={styles.Filter}>
      <Icon icon="Search-small" size={16} color="#7D7D7D" />
      <span>Filtrar</span>
    </div>
  )
}

export default Filter