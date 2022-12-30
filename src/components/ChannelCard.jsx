import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { search } from '../apis/youtube'
import VideoCard from './VideoCard'

const ChannelCard = () => {
  const { keyword } = useParams()
  const { isLoading, error, data: videos } = useQuery(['videos', keyword], () => search(keyword))

  return (
    <>
      <div>Videos {keyword ? `🔍${keyword}` : '🔥'}</div>
      {isLoading && <p>Loading...</p>}
      {error && <p>Something is wrong 😖</p>}
      {videos && (
        <ul>
          {videos.map(video => (
            <VideoCard key={video.id} video={video} />
          ))}
        </ul>
      )}
    </>
  )
}

export default ChannelCard
