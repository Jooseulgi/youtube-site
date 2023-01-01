import { createContext, useContext, useMemo } from 'react'
import FakeYoutubeClient from '../apis/fakeYoutubeClient'
import Youtube from '../apis/youtube'
import YoutubeClient from '../apis/youtubeClient'

export const YoutubeApiContext = createContext()

// const client = new FakeYoutubeClient()
const client = new YoutubeClient()
const youtube = new Youtube(client)

export const YoutubeApiProvider = ({ children }) => {
  const value = useMemo(() => ({ youtube }))
  return <YoutubeApiContext.Provider value={value}>{children}</YoutubeApiContext.Provider>
}

export function useYoutubeApi() {
  return useContext(YoutubeApiContext)
}
