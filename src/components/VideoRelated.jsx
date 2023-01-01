import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { useYoutubeApi } from '../context/YoutubeApiContext'
import VideoCard from './VideoCard'

const VideoRelated = ({ id }) => {
  const { youtube } = useYoutubeApi()
  const {
    isLoading,
    error,
    data: videos,
  } = useQuery(['related', id], () => {
    return youtube.videoRelated(id)
  })
  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {error && <p>Something is wrong 😖</p>}
      {videos && (
        <ul>
          {videos.map(video => (
            <VideoCard key={video.id} video={video} type="list" />
          ))}
        </ul>
      )}
      <div>{id}</div>
    </div>
  )
}

export default VideoRelated
