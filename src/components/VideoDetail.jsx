import { useLocation } from 'react-router-dom'
import VideoDetailInfo from './VideoDetailInfo'
import VideoRelated from './VideoRelated'

const VideoDetail = () => {
  //   let findProduct = props.products.find(function(product) {
  //     return product.id = id;
  // });
  const {
    state: { video },
  } = useLocation()
  const { title, channelId, channelTitle, description } = video.snippet
  return (
    <div className="flex flex-col lg:flex-row">
      <div className="basis-4/6">
        <div>
          <iframe
            title="iframe"
            id="player"
            type="text/html"
            width="100%"
            height="640"
            src={`http://www.youtube.com/embed/${video.id}`}
            frameBorder="0"
          />
        </div>
        <div className="p-8">
          <h2 className="text-xl font-bold">{title}</h2>
          <VideoDetailInfo id={channelId} name={channelTitle} />
          <pre className="whitespace-pre-wrap">{description}</pre>
        </div>
      </div>
      <div className="basis-2/6">
        <VideoRelated id={video.id} />
      </div>
    </div>
  )
}

export default VideoDetail
