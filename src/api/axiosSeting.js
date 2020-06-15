var qs = require("qs")
import { getHashParameters } from "@/global.js"
var system = getHashParameters("system")
var scoreUrl = "/Windchill/vivo/rest/"
var baseUrl = scoreUrl + typeName

//发送string请求方法
export var quest = axios.create({
  // baseURL: baseUrl,
  //timeout: 20000,
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  },
  transformRequest: function(params) {
    return qs.stringify({ param: JSON.stringify(params) })
  },
})

//直接发送string请求方法
export var postparam = axios.create({
  // baseURL: baseUrl,
  //timeout: 20000,
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  },
  transformRequest: function(params) {
    return qs.stringify(params)
  },
})
//发送FomeData请求方法
export var ask = axios.create({
  // baseURL: baseUrl,
  //timeout: 30000,
  headers: {
    "Content-Type": "application/json; charset=UTF-8",
    dataType: "json",
  },
  transformRequest: function(params) {
    return JSON.stringify(params)
  },
})
