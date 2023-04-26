import { useState } from 'react'

import api from '../../services/api'
import { Background } from './styles'

function Home() {
  const [movies, setMovies] = useState()

  async function getMovies() {
    const data = await api.get('/movie/popular')

    setMovies(data.data.results[1])
    console.log(data)
  }

  getMovies()

  return (
    <>
      {movies && (
        <Background img="https://image.tmdb.org/t/p/original//lWqjXgut48IK5f5IRbDBAoO2Epp.jpg">
          <h1>{movies.title}</h1>
          <p>{movies.overview}</p>
        </Background>
      )}
    </>
  )
}

export default Home
