import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Detail from '../pages/detail'
import Video from '../pages/video'

const RootRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Video />} />
        <Route path="videos/:keyword" element={<Video />} />
        <Route path="videos/:videoId" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  )
}

export default RootRoute
