// 云函数入口文件
const cloud = require('wx-server-sdk')
import fetch from 'node-fetch'

const host = 'https://api.github.com/'
cloud.init({
  env: 'bitsum-707ce8',
  traceUser: true
})

// 云函数入口函数
exports.main = async (event, context) => {
  return {
    sum: event.a + event.b
  }

  // let url = 'https://api.github.com/repos/mikeal/request',
  // var callback = (error, response, body) => {
  //   if (!error && response.statusCode == 200) {
  //     // console.log(body)
  //     return {
  //       data: body,
  //       error: ''
  //     }
  //   }
  //   return {
  //     data: {},
  //     error: error
  //   }

  // }
  // request(url, callback)

}