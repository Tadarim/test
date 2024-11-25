import axios, { AxiosInstance } from 'axios'
import { MyRequestConfig } from './types'

class MyRequest {
  instance: AxiosInstance

  constructor(config: MyRequestConfig) {
    this.instance = axios.create(config)

    // 全局请求拦截器
    this.instance.interceptors.request.use(
      (config) => {
        return config
      },
      (err) => {
        return err
      }
    )

    // 全局响应拦截器
    this.instance.interceptors.response.use(
      (res) => {
        return res.data
      },
      (err) => {
        return err
      }
    )

    // 针对特定的实例添加拦截器
    this.instance.interceptors.request.use(
      config.interceptors?.requestSuccessFn,
      config.interceptors?.requestFailureFn
    )
    this.instance.interceptors.response.use(
      config.interceptors?.responseSuccessFn,
      config.interceptors?.responseFailureFn
    )
  }

  request<T = any>(config: MyRequestConfig<T>) {
    if (config.interceptors?.requestSuccessFn) {
      config = config.interceptors.requestSuccessFn(config)
    }

    return new Promise<T>((resolve, reject) => {
      this.instance
        .request<any, T>(config)
        .then((res) => {
          if (config.interceptors?.responseSuccessFn) {
            res = config.interceptors.responseSuccessFn(res)
          }
          resolve(res)
        })
        .catch((err) => reject(err))
    })
  }
  get<T = any>(config: MyRequestConfig<T>) {
    return this.request({ ...config, method: 'GET' })
  }
  post<T = any>(config: MyRequestConfig<T>) {
    return this.request({ ...config, method: 'POST' })
  }
  delete<T = any>(config: MyRequestConfig<T>) {
    return this.request({ ...config, method: 'DELETE' })
  }
  patch<T = any>(config: MyRequestConfig<T>) {
    return this.request({ ...config, method: 'PATCH' })
  }
}

export default MyRequest
