import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import dummy from '../apis/transVideo.json'

const Detail = ({ match }) => {
  const [data, setData] = useState(dummy)
  const { id } = useParams()
  const navigate = useNavigate()
  return (
    <div>
      {data.items.map(el => {
        return <div>{match.params.el.id}</div>
      })}
    </div>
  )
}

export default Detail
