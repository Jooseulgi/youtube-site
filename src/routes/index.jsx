import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Video from '../pages/video'
import Detail from '../pages/detail'

const RootRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Video />} />
        <Route path="videos/:keyword" element={<Video />} />
        <Route path="videos/watch/:videoId" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  )
}

export default RootRoute
