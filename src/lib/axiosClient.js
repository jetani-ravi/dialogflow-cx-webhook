const axios = require('axios')
const { HTTP_METHODS } = require('../config/constant/apiEndpoints')
class AxiosClient {
  constructor (host) {
    this.host = host || `${process.env.API_HOST}`
    console.log('host__', process.env.API_HOST)
  }

  get (endpoint, queryParams, headers) {
    const url = `${this.host}${endpoint}`
    if (!headers) {
      headers = {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.API_TOKEN}`
      }
    }

    return axios({
      method: HTTP_METHODS.GET,
      url,
      params: queryParams,
      headers
    })
  }

  post (endpoint, queryParams, headers, data = {}) {
    const url = `${this.host}${endpoint}`
    if (!headers) {
      headers = {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.API_TOKEN}`
      }
    }

    return axios({
      method: HTTP_METHODS.POST,
      url,
      params: queryParams,
      headers,
      data
    })
  }

  put (endpoint, queryParams, headers, data = {}) {
    const url = `${this.host}${endpoint}`
    if (!headers) {
      headers = {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.API_TOKEN}`
      }
    }

    return axios({
      method: HTTP_METHODS.PUT,
      url,
      params: queryParams,
      headers,
      data
    })
  }

  delete (endpoint, queryParams, headers) {
    const url = `${this.host}${endpoint}`
    if (!headers) {
      headers = {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.API_TOKEN}`
      }
    }

    return axios({
      method: HTTP_METHODS.DELETE,
      url,
      params: queryParams,
      headers
    })
  }

  sendRequest (method = HTTP_METHODS.GET, endpoint, queryParams, headers, data = {}) {
    const url = `${this.host}${endpoint}`
    if (!headers) {
      headers = {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.API_TOKEN}`
      }
    }

    return axios({
      method,
      url,
      params: queryParams,
      headers,
      data
    })
  }
}

module.exports = AxiosClient
