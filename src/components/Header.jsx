import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { BsSearch, BsYoutube } from 'react-icons/bs'

const Header = () => {
  const navigate = useNavigate()
  const { keyword } = useParams()
  const [value, setValue] = useState('')
  const onChange = e => {
    const { value } = e.target
    setValue(value)
  }
  const handleSubmit = e => {
    e.preventDefault()
    navigate(`/videos/${value}`)
  }

  useEffect(() => {
    setValue(keyword || '')
  }, [keyword])
  return (
    <header className="w-full flex p-4 text-2xl border-b border-zinc-600 mb-4">
      <div className="flex items-center" role="presentation" onClick={() => navigate('/')}>
        <BsYoutube className="text-4xl text-brand" />
        <h1 className="font-bold ml-2 text-3xl">Youtube</h1>
      </div>
      <form className="w-full flex justify-center" onSubmit={handleSubmit}>
        <input
          className="w-7/12 p-2 outline-none bg-black"
          type="text"
          placeholder="Search"
          onChange={onChange}
          value={value}
        />
        <button className="bg-zinc-600 px-4" type="button">
          <BsSearch />
        </button>
      </form>
    </header>
  )
}

export default Header
