import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import dummy from '../apis/transVideo.json'
import dummy2 from '../apis/keyword.json'
import VideoCard from './VideoCard'

const ChannelCard = () => {
  const { keyword } = useParams()
  const {
    isLoding,
    error,
    data: videos,
  } = useQuery(['videos', keyword], async () => {
    return fetch(`/apis/${keyword ? 'keyword' : 'transVideo'}.json`)
      .then(res => res.json())
      .then(data => data.items)
  })

  return (
    <div>
      <div>Videos {keyword ? `${keyword}` : '핫'}</div>
      {isLoding && <p>Loding....</p>}
      {error && <p>Something is wrong</p>}
      {videos && (
        <ul>
          {videos.map(video => (
            <VideoCard key={video.id} video={video} />
          ))}
        </ul>
      )}
    </div>
  )
}

export default ChannelCard
