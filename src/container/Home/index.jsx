import api from '../../services/api'

function Home() {
  async function getMovies() {
    const data = await api.get('/movie/popular')

    console.log(data)
  }

  getMovies()

  return (
    <div>
      <h1>Home</h1>
      <p>Essa é a home</p>
    </div>
  )
}

export default Home
