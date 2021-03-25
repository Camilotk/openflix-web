import axios from 'axios'
import { backendLogout, frontendLogout, getAccessToken } from './auth'

export const baseURL = 'http://localhost:3333'

let http, apiCtx, apiSignOut

const api = (ctx, signOut) => {

  if (!http) {

    // client creation
    http = axios.create({
      baseURL: `${baseURL}`
    })

    // request interceptor (before)
    http.interceptors.request.use(async config => {
      const accessToken = getAccessToken(apiCtx)
      config.headers.Accept = 'application/json'
      if (accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`
      }
      return config
    })

    // response interceptor (after)
    http.interceptors.response.use(response => {

      // Any status code that lie within the range of 2xx cause this function to trigger
      // Do something with response data
      return response

    }, function (error) {

      // if the request is unauthorized
      const unauthorized = error.response && error.response.status === 401

      // if it's a backend request
      if (apiCtx && unauthorized) {
        backendLogout(apiCtx)

      // if it's a front end request
      } else if (unauthorized) {
        frontendLogout(apiSignOut)
      }

      // Any status codes that falls outside the range of 2xx cause this function to trigger
      // Do something with response error
      return Promise.reject(error)
    })

  }

  apiCtx = ctx
  apiSignOut = signOut

  return http
}

export default api