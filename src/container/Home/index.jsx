import { useState, useEffect } from 'react'

import Button from '../../components/Button'
import api from '../../services/api'
import { Background, Info, Poster, Container, ContainerButton } from './styles'

function Home() {
  const [movies, setMovies] = useState()

  useEffect(() => {
    async function getMovies() {
      const {
        data: { results }
      } = await api.get('/movie/popular')

      setMovies(results[4])
    }
    getMovies()
  }, [])

  return (
    <>
      {movies && (
        <Background
          img={`https://image.tmdb.org/t/p/original${movies.backdrop_path}`}
        >
          <Container>
            <Info>
              <h1>{movies.title}</h1>
              <p>{movies.overview}</p>
              <ContainerButton>
                <Button red>Assista Agora</Button>
                <Button>Assista o Trailer</Button>
              </ContainerButton>
            </Info>
            <Poster>
              <img
                alt="capa-do-filme"
                src={`https://image.tmdb.org/t/p/original${movies.poster_path}`}
              />
            </Poster>
          </Container>
        </Background>
      )}
    </>
  )
}

export default Home
