import httpAxios from '../utils/httpAxios'

export function getTimeLine() {
  return httpAxios({url: '/timeline/select', method: 'get'})
}
export function setTimeLine(data) {
  return httpAxios({url: '/timeline/create', method: 'post', data})
}