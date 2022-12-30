import axios from 'axios'

export async function search(keyword) {
  return axios.get(`/videos/${keyword ? 'keyword' : 'transVideo'}.json`).then(res => res.data.items)
}
