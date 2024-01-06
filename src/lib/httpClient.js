const axios = require('axios')
require('dotenv').config()

const httpClient = axios.create({
  baseURL: process.env.BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${process.env.API_TOKEN}`
  },
})

class HttpClientService {
  constructor () {
    this.httpClient = httpClient
  }

  async get (endpoint) {
    console.log('GET ', endpoint)
    return await this.httpClient.get(endpoint)
  }

  async post (endpoint, data) {
    console.log('POST ', endpoint, data)
    return await this.httpClient.post(endpoint, data)
  }

  async put(endpoint, data) {
    return await this.httpClient.put(endpoint, data)
  }

  async delete(endpoint) {
    return await this.httpClient.delete(endpoint)
  }
}

module.exports = new HttpClientService()
