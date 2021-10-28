import axios from 'axios'

const API = 'https://x8ki-letl-twmt.n7.xano.io/api:2JHnrLvS'
const getSneaker360 = async () => {
    try {
      const result = await axios.get(
        `${API}/sneaker_360`
      )
      return result.data
    } catch (e) {
      console.error(e)
      return {}
    }
  }
  const getRecentlyViewed = async () => {
    try {
      const result = await axios.get(
        `${API}/recently_viewed`
      )
      return result.data
    } catch (e) {
      console.error(e)
      return {}
    }
  }
  const getSneakerItem = async () => {
    try {
      const result = await axios.get(
        `${API}/sneaker_item`
      )
      return result.data
    } catch (e) {
      console.error(e)
      return {}
    }
  }
  const getSneaker = async (ref) => {
    try {
      const result = await axios.get(
        `${API}/sneaker_ref/${ref}`
      )
      return result.data
    } catch (e) {
      console.error(e)
      return {}
    }
  }
  export {
    getSneaker360,
    getRecentlyViewed,
    getSneakerItem,
    getSneaker

  }  