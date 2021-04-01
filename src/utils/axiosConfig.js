import axios from 'axios'

export function createService(baseURL) {
  const service = axios.create({
    baseURL: baseURL,
    timeout: 5000,
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
      Accept: 'application/json'
    }
  })

  service.interceptors.request.use(
    config => {
      if (!config.headers['Accept-Language']) {
        config.headers['Accept-Language'] = 'ko'
      }

      if (config.method && config.method.toLowerCase() === 'post') {
        config.data = config.data || {}
      }

      return config
    },
    error => {
      console.log(error) // for debug
      return Promise.reject(error)
    }
  )

  return service
}
