import React from 'react'
import { checkPropTypes } from 'prop-types'

const VideoCard = ({ video }) => {
  return (
    <div>
      {/* <div>
        <img src={video.snippet.thumbnails.high.url} alt="" />
      </div> */}
      <p>{video}</p>
      {/* <p>{video.snippet.channelTitle}</p>
      <p>{video.snippet.publishedAt}</p> */}
    </div>
  )
}

VideoCard.propsTypes = {
  video: checkPropTypes.any.isRequired,
}

export default VideoCard
