import React from 'react'
// import { Navbar } from '../../ui'
import { EditarGasto, GastosPorCategoria, InicioSesion, ListaDeGastos, RegistroUsuario } from '../components'

import { Navigate, Route, Routes } from 'react-router-dom'
import { Navbar } from '../navbar/Navbar'

export const RoutesIn = () => {
  return (
    <>
        <Navbar/>
        <div className='container bg-dark text-white '>
        <Routes>
        <Route path="crear-cuenta" element={<RegistroUsuario/>} />
        <Route path="categorias" element={<GastosPorCategoria/>} />
        <Route path="lista" element={<ListaDeGastos/>} />
        <Route path="editar/:id" element={<EditarGasto/>} />
        <Route path="/" element={<Navigate to ="/login"/>} />
      </Routes>
        </div>


    </>
  )
}
