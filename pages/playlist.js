import React from 'react'

import PlaylistHeader from '../src/components/PlaylistHeader'
import DataTable from '../src/components/DataTable'
import data from '../data.json'

import styles from '../src/assets/styles/pages/playlist.module.scss'

const Playlist = () => {
  return (
    <main className={styles.Playlist}>
      <PlaylistHeader {...data.topPlaylist[0]} />
      <DataTable />
    </main>
  )
}

export default Playlist