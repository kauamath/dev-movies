import { Outlet } from 'react-router-dom'

import Header from '../components/Header'

function DefaultLayout(params) {
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}

export default DefaultLayout
