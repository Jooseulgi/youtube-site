import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import dummy from '../apis/transVideo.json'

const ChannelCard = () => {
  const [data, setData] = useState(dummy)
  console.log(setData)
  return (
    <ul className="grid grid-cols-5 gap-2">
      {data.items.map(el => (
        <a href={el.id} key={el.snippet.channelId}>
          <li>
            <div>
              <img src={el.snippet.thumbnails.standard.url} alt="" />
            </div>
            <p>{el.snippet.title}</p>
            <p>{el.snippet.channelTitle}</p>
            <p>{el.snippet.publishedAt}</p>
          </li>
        </a>
      ))}
    </ul>
  )
}

export default ChannelCard
