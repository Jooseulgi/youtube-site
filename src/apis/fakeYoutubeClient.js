import axios from 'axios'

class FakeYoutubeClient {
  constructor() {
    this.keywordAPI = axios.get(`/videos/keyword.json`)
    this.transAPI = axios.get(`/videos/trandsVideo.json`)
    this.channelsAPI = axios.get(`/videos/channelsDetail.json`)
    this.relatedVideoAPI = axios.get(`/videos/relatedVideo.json`)
  }
  async search({ params }) {
    return params.relatedToVideoId ? this.relatedVideoAPI : this.keywordAPI
  }
  async videos() {
    return this.transAPI
  }
  async channels() {
    return this.channelsAPI
  }
}

export default FakeYoutubeClient
