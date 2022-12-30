import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import VideoCard from './VideoCard'

const ChannelCard = () => {
  const { keyword } = useParams()
  const {
    isLoading,
    error,
    data: videos,
  } = useQuery(['videos', keyword], async () => {
    // fetch는 json으로 변환하는 번거로움, 에러핸들링이 번거롭다
    return axios.get(`/videos/${keyword ? 'search' : 'popular'}.json`).then(res => res.data.items)
  })

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
