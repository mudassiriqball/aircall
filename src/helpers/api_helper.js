import axios from "axios"
import accessToken from "./jwt-token-access/accessToken"

//pass new generated access token here
const token = accessToken

//apply base url for axios
const API_URL = "https://aircall-job.herokuapp.com"

const axiosApi = axios.create({
  baseURL: API_URL,
})

// Request Timeout
axiosApi.defaults.timeout = 10000
// Headers
// axiosApi.defaults.headers.common["Authorization"] = ''
// Response
axiosApi.interceptors.response.use(
  response => response,
  error => Promise.reject(error)
)

// GET
export async function get(url, config = {}) {
  return await axiosApi.get(url, { ...config }).then(response => response.data);
}

// POST
export async function post(url, data, config = {}) {
  return axiosApi
    .post(url, { ...data }, { ...config })
    .then(response => response.data)
}

// PUT
export async function put(url, data, config = {}) {
  return axiosApi
    .put(url, { ...data }, { ...config })
    .then(response => response.data)
}

// DELETE
export async function del(url, config = {}) {
  return await axiosApi
    .delete(url, { ...config })
    .then(response => response.data)
}
