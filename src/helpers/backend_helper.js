import axios from "axios"
import { del, get, post, put } from "./api_helper"
import * as url from "./url_helper"

const getActivitiesApi = (cb) => {
  return get(url.ACTIVITIES_URL).then(res => {cb({success: true, data: res})}).catch(err => cb({success: false, ...err}))
}

const postArchiveActivityApi = (id, body, cb) => {
  return post(`${url.ACTIVITIES_URL}/${id}`, body).then(res => {cb({success: true, data: res})}).catch(err => cb({success: false, ...err}))
}
// Login Method

export {
  getActivitiesApi,
  postArchiveActivityApi,
}
