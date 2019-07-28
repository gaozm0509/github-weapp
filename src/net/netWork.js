
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
function netRequest(api, params, method, isNoLoading, isTrending) {
    return new Promise((resolve, reject) => {
        if (!isNoLoading) {
            Taro.showLoading({
                title: '',
            })
        }
        Taro.request({
            url: (isTrending ? Api.trendingHost : Api.host) + api,
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
    trendingNetRequestGet: (api, params, isloading) => {
        return netRequest(api, params, 'GET', isloading, true)
    },
    trendingNetRequestPOST: (api, params, isloading) => {
        return netRequest(api, params, 'POST', isloading, true)
    },
    netRequestGet: (api, params, method, isloading) => {
        return netRequest(api, params, 'GET', isloading)
    },
    netRequestPOST: (api, params, method, isloading) => {
        return netRequest(api, params, 'POST', isloading)
    }
}