import React from 'react'

import Filter from './Filter'
import HeaderTable from './HeaderTable'
import Table from './Table'

import styles from '../assets/styles/components/DataTable.module.scss'

const DataTable = () => {
  return (
    <table className={styles.DataTable}>
      <Filter />
      <HeaderTable />
      <Table />
    </table>
  )
}

export default DataTable