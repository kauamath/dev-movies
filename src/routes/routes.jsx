import { Route, Routes } from 'react-router-dom'

import Home from '../container/Home'
import Movies from '../container/Movies'
import Series from '../container/Series'

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/filmes" element={<Movies />} />
      <Route path="/series" element={<Series />} />
    </Routes>
  )
}

export default Router
