import React from 'react'

import Row from './Row'

import styles from '../assets/styles/components/Table.module.scss'

const Table = () => {
  return (
    <tbody className={styles.Table}>
      <Row />
      <Row />
      <Row />
      <Row />
      <Row />
      <Row />
      <Row />
      <Row />
    </tbody>
  )
}

export default Table