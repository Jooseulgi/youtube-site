import React from 'react'
import { useNavigate } from 'react-router-dom'
import { formatAgo } from '../util/date'

const VideoCard = ({ video, type }) => {
  const navigate = useNavigate()
  const { thumbnails, title, channelTitle, publishedAt } = video.snippet
  const isList = type === 'list'
  return (
    <li
      className={isList ? 'flex gap-1 m-2' : ''}
      onClick={() => navigate(`/videos/watch/${video.id}`, { state: { video } })}
      role="presentation"
    >
      <div className={isList ? 'w-60 mr-2' : 'w-full'}>
        <img src={thumbnails.high.url} alt="" />
      </div>
      <div>
        <p className="font-semibold my-2 line-clamp-2">{title}</p>
        <p className="text-sm opacity-80">{channelTitle}</p>
        <p className="text-sm opacity-80">{formatAgo(publishedAt)}</p>
      </div>
    </li>
  )
}

export default VideoCard
