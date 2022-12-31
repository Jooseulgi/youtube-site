import axios from 'axios'

// const search = keyword => {
//   return axios.get(`/videos/${keyword ? 'keyword' : 'transVideo'}.json`).then(res => res.data.items)
// }

class FakeYoutube {
  // eslint-disable-next-line no-useless-constructor, no-empty-function
  constructor() {}
  async search(keyword) {
    return keyword ? this.#searchByKeyword(keyword) : this.#mostPopular()
  }

  // eslint-disable-next-line class-methods-use-this
  async #searchByKeyword() {
    return axios
      .get(`/videos/keyword.json`)
      .then(res => res.data.items)
      .then(items => items.map(item => ({ ...item, id: item.id.videoId })))
  }

  // eslint-disable-next-line class-methods-use-this
  async #mostPopular() {
    return axios.get(`/videos/transVideo.json`).then(res => res.data.items)
  }
}

export { FakeYoutube }
