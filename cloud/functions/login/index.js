const cloud = require('wx-server-sdk')

cloud.init({
  // env: 'bitsum-707ce8',
  // traceUser: true
})


exports.main = async () => {
  const wxContext = cloud.getWXContext()

  return {
    openid: wxContext.OPENID,
    appid: wxContext.APPID,
    unionid: wxContext.UNIONID,
  }
}