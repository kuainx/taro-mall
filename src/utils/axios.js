import axios from 'axios'

export const get = (url, params, config) => {
  return axios.get(url, { params, ...config })
}
