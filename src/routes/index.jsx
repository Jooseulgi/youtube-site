import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Detail from '../pages/detail'
import Main from '../pages/main'

const RootRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/video/:id" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  )
}

export default RootRoute
