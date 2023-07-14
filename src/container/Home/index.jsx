import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import Button from '../../components/Button'
import Modal from '../../components/Modal'
import Slider from '../../components/Slider'
import {
  getMovies,
  getTopMovies,
  getTopPeople,
  getTopSeries,
  getUpcoming
} from '../../services/getData'
import { getImages } from '../../utils/getImages'
import { Background, Info, Poster, Container, ContainerButton } from './styles'

function Home() {
  const [showModal, setShowModal] = useState(false)
  const [movie, setMovie] = useState()
  const [Upcoming, setUpcoming] = useState()
  const [topMovies, setTopMovies] = useState()
  const [topSeries, setTopSeries] = useState()
  const [topPeople, setTopPeople] = useState()
  const navigate = useNavigate()

  useEffect(() => {
    async function getAllData() {
      Promise.all([
        getMovies(),
        getUpcoming(),
        getTopMovies(),
        getTopSeries(),
        getTopPeople()
      ])
        .then(([movie, Upcoming, topMovies, topSeries, topPeople]) => {
          setMovie(movie)
          setUpcoming(Upcoming)
          setTopMovies(topMovies)
          setTopSeries(topSeries)
          setTopPeople(topPeople)
        })
        .catch((error) => console.error(error))
    }
    getAllData()
  }, [])

  return (
    <>
      {movie && (
        <Background img={getImages(movie.backdrop_path)}>
          {showModal && (
            <Modal movieId={movie.id} setShowModal={setShowModal} />
          )}
          <Container>
            <Info>
              <h1>{movie.title}</h1>
              <p>{movie.overview}</p>
              <ContainerButton>
                <Button red onClick={() => navigate(`/detalhe/${movie.id}`)}>
                  Assista Agora
                </Button>
                <Button onClick={() => setShowModal(true)}>
                  Assista o Trailer
                </Button>
              </ContainerButton>
            </Info>
            <Poster>
              <img alt="capa-do-filme" src={getImages(movie.poster_path)} />
            </Poster>
          </Container>
        </Background>
      )}
      {Upcoming && <Slider info={Upcoming} title={'Lançamentos 2023'} />}
      {topMovies && <Slider info={topMovies} title={'Top Filmes'} />}
      {topSeries && <Slider info={topSeries} title={'Top Séries'} />}
      {topPeople && <Slider info={topPeople} title={'Famosos'} />}
    </>
  )
}

export default Home
