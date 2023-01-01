import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { useYoutubeApi } from '../context/YoutubeApiContext'

const VideoDetailInfo = ({ id, name }) => {
  const { youtube } = useYoutubeApi()
  const {
    isLoading,
    error,
    data: url,
  } = useQuery(['channel', id], () => {
    return youtube.videoImageURL(id)
  })
  return (
    <div className="flex my-4 mb-8 items-center">
      {url && <img className="w-10 h-10 rounded-full" src={url} alt={name} />}
      <p className="text-lg font-medium ml-2">{name}</p>
    </div>
  )
}

export default VideoDetailInfo
