import AxiosClient from '../axiosClient'

const Get = ({ url, params = {} }) => {
  const config = {
    headers: {
      Authorization: ''
    },
    params
  }
  return AxiosClient.get({ url, config })
}

export default Get
