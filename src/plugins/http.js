import axios from 'axios'
const MyHttpServer ={}

const myHttpServer = {}
MyHttpServer.install =  (Vue) => {
    axios.defaults.baseURL = 'http://30r97104b2.qicp.vip'

    Vue.prototype.$http = axios
}
export default MyHttpServer