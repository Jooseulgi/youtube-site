import axios from 'axios'

class FakeYoutube {
  constructor() {
    this.keywordAPI = axios.get(`/videos/keyword.json`)
    this.transAPI = axios.get(`/videos/transVideo.json`)
  }
  async search(keyword) {
    return keyword ? this.#searchByKeyword(keyword) : this.#mostPopular()
  }

  async #searchByKeyword() {
    return this.keywordAPI
      .then(res => res.data.items)
      .then(items => items.map(item => ({ ...item, id: item.id.videoId })))
  }

  async #mostPopular() {
    return this.transAPI.then(res => res.data.items)
  }
}

export { FakeYoutube }
