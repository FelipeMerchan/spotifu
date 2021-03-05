import React from 'react'

import Row from './Row'

import styles from '../assets/styles/components/Table.module.scss'

const Table = ({ data }) => {
  return (
    <tbody className={styles.Table}>
      {
        data.topPlaylist[0].songs.map(song =>
          <Row
            key={song.id}
            title={song.title}
            artist={song.artist}
            album={song.album}
            date={song.date}
            duration={song.duration}
          />
        )
      }
    </tbody>
  )
}

export default Table