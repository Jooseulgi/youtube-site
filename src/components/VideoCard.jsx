import React from 'react'

const VideoCard = ({ video }) => {
  return (
    <li>
      <div>
        <img src={video.snippet.thumbnails.high.url} alt="" />
      </div>
      <p>{video.snippet.title}</p>
      <p>{video.snippet.channelTitle}</p>
      <p>{video.snippet.publishedAt}</p>
    </li>
  )
}

export default VideoCard
