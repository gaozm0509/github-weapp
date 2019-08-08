// 云函数入口文件
const cloud = require('wx-server-sdk')
const request = require('request')

const host = 'https://api.github.com/'
const hostMD = 'https://raw.githubusercontent.com/'

/**
 * v3 api host
 */
const cloudApiTypeV3 = 'cloudApiTypeV3'
/**
 * markdown 数据
 */
const cloudApiTypeMD = 'cloudApiTypeMD'
cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {

  let method = event.method || 'GET'
  let type = event.type || cloudApiTypeV3
  let api = event.api
  let url
  if (type === cloudApiTypeV3) {
    url = host + api
  } else if (type === cloudApiTypeMD) {
    url = hostMD + api + '/master/README.md'
  }

  let options = {
    url: url,
    headers: {
      'User-Agent': 'request',
      'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3'
    },
    method: method
  }
  return new Promise(function (resolve, reject) {
    request(options, (error, response, body) => {
      // README 文件不需要转
      if (type === cloudApiTypeV3) {
        body = JSON.parse(body)
      }
      resolve(body)
    })
  })
}