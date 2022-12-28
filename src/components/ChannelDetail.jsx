import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import dummy from '../apis/channelsDetail.json'

const ChannelDetail = () => {
  const [data, setData] = useState(dummy)

  //   let findProduct = props.products.find(function(product) {
  //     return product.id = id;
  // });
  return (
    <div>
      <div>
        {data.items.map(el => (
          <div key={el.id}>{el.snippet.thumbnails.high.url}</div>
        ))}
      </div>
    </div>
  )
}

export default ChannelDetail
