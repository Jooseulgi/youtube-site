import React from 'react'

const VideoCard = ({ video }) => {
  return (
    <div className="grid grid-cols-5 gap-2">
      <div>
        <img src={video.snippet.thumbnails.high.url} alt="" />
      </div>
      <p>{video.snippet.title}</p>
      <p>{video.snippet.channelTitle}</p>
      <p>{video.snippet.publishedAt}</p>
    </div>
  )
}

export default VideoCard
