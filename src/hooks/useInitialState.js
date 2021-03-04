import { useState, useEffect } from 'react'

const useInitialState = (API) => {
  const [ playlists, setPlaylists ] = useState([])

  useEffect(() => {
    fetch(API)
      .then(response => response.json())
      .then(data => setPlaylists(data))
  }, [])
  return playlists
}

export default useInitialState