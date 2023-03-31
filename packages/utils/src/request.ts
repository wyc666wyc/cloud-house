import Axios from 'axios'

const request = Axios.create({
  baseURL: 'http://192.168.253.175:3000',
})
request.interceptors.request.use((q, b) => {

})
request.interceptors.response.use(() => {

})
export default request