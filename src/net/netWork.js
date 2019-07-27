
import Taro from '@tarojs/taro'
import Api from './api'


export default {
    Api,
    /**
 * 
 * @param {访问url} api 
 * @param {参数} params 
 * @param {是否需要展示loading} isShowLoading 
 */
    netRequestGet: (api, params, isNoLoading) => {
        return new Promise((resolve, reject) => {
            if (!isNoLoading) {
                Taro.showLoading({
                    title: '...',
                })
            }
            Taro.request({
                url: Api.host + api,
                data: params,
                success: (res) => {
                    resolve(res)
                },
                fail: (res) => {
                    reject(res)
                },
                complete: (res) => {
                    Taro.hideLoading()
                }
            })
        })
    }
}