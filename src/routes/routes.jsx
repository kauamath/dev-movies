import { Route, Routes } from 'react-router-dom'

import Detail from '../container/Detail'
import Home from '../container/Home'
import Movies from '../container/Movies'
import Series from '../container/Series'
import DefaultLayout from '../layout/DefaultLayout'

function Router() {
  return (
    <Routes>
      <Route element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/filmes" element={<Movies />} />
        <Route path="/series" element={<Series />} />
        <Route path="/detalhe/:id" element={<Detail />} />
      </Route>
    </Routes>
  )
}

export default Router
