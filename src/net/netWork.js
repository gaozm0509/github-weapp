
import Taro from '@tarojs/taro'
import Api from './api'


/**
 * 
 * @param {api} api 
 * @param {参数} params
 * @param {请求方法} method 
 * @param {是否展示loading} isloading 
 * @param {是否是trending api,host为 trendingHost} isTrending 
 */
function netRequest(api, params, method, isNoLoading) {
    return new Promise((resolve, reject) => {
        if (!isNoLoading) {
            Taro.showLoading({
                title: 'loading...',
            })
        }
        Taro.request({
            url: Api.host + api,
            data: params,
            method: method,
            success: (res) => {
                Taro.hideLoading()
                resolve(res)
                console.log(
                    '==================', api, 'log begin======================',
                    res,
                    '==================', api, 'log end======================',
                )
            },
            fail: (res) => {
                Taro.hideLoading()
                reject(res)
            },
            complete: (res) => {
                Taro.hideLoading()
            }
        })
    })
}

export default {
    Api,
    netRequestGet: (api, params, method, isNoLoading) => {
        return netRequest(api, params, 'GET', isNoLoading)
    },
    netRequestPOST: (api, params, method, isNoLoading) => {
        return netRequest(api, params, 'POST', isNoLoading)
    }
}