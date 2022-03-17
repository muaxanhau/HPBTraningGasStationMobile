import axios from 'axios'
import {ApiRoutes} from '../../constants'

const AxiosClient = axios.create({
  defaults: {
    baseURL: ApiRoutes.baseURL,
    headers: {
      common: {
        'Content-Type': 'application/json',
      },
      post: {
        // 'Content-Type': 'application/x-www-form-urlencoded'
      },
    },
  },
})

AxiosClient.interceptors.response.use(
  response => {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response.data
  },
  error => {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error)
  },
)

export default AxiosClient
