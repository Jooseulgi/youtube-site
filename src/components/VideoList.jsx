import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { useYoutubeApi } from '../context/YoutubeApiContext'
import VideoCard from './VideoCard'

const VideoList = () => {
  const { keyword } = useParams()
  const { youtube } = useYoutubeApi()
  const {
    isLoading,
    error,
    data: videos,
  } = useQuery(['videos', keyword], () => {
    return youtube.search(keyword)
  })

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {error && <p>Something is wrong 😖</p>}
      {videos && (
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-2 gap-y-4">
          {videos.map(video => (
            <VideoCard key={video.id} video={video} />
          ))}
        </ul>
      )}
    </>
  )
}

export default VideoList
