import {Route, Routes} from 'react-router-dom'
// import { MarvelPage, DCPages, HeroesRoutes} from '../heroes'
import { Login } from '../pages/Login'
import { RoutesIn } from '../elements/routes/RoutesIn'

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="login" element={<Login/>} />
        <Route path="/*" element={<RoutesIn/>} />
      </Routes>
    </>
  )
}
