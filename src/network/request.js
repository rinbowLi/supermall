import axios from 'axios'

export function request(config) {
  //创建实例
  const server = axios.create({
    //baseURL:"http://123.207.32.32:8000/api/v2",
    baseURL: "http://106.54.54.237:8000/api/v1",
    timeout:5000,
    // proxy:{    //跨域代理
    //   '/api': {
    //     target: '', //api url
    //     changeOrigin: true,
    //     pathRewrite: {
    //       '^/api': ''
    //     }
    //   }
    // }
  })

  //请求拦截
  server.interceptors.request.use(config=>{
    return config
  },err=>{
    return err
  })

  //响应拦截
  server.interceptors.response.use(res=>{

    return res.data
  })

  //axios 返回的就是一个promise对象，这里直接返回即可
 return server(config)
}