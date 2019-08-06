/*
 * @Author: 农村高富帅
 * @Date: 2018-08-19 23:56:24
 * @LastEditors: 农村高富帅
 * @LastEditTime: 2019-06-20 19:03:31
 * @Description: bitsum weap h5
 * @Email: gaozemin0509@gmail.com
 */

/*
说明，
一，根据产品需求，自定义nav
二，nav有三种样式，
   1，默认为主色背景 + 白色 title
   2，image 类型为注册背景 + title 前有自定义的 image
   3，白色背景样式为白色背景 + 黑色字体
   4，样式的关键字 image（直接传image属性），isWhite（如果需要为白色背景，传 ‘isWhite = true’）
*/

import Taro, { Component } from '@tarojs/taro'
import { View, } from '@tarojs/components'
import { AtIcon } from 'taro-ui'
import globalData from '../../utils/globalData'
import './customNavBar.scss'



export default class CustomNavBar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            windowHeight: 0,
        }
    }

    static defaultProps = {
        image: null,
        isWhite: false,
        title: '',
        backSkip: 0,
    }

    static options = {
        addGlobalClass: true,
    }

    static defaultProps = {
    }


    componentWillMount() {
    }

    languageClick() {
        this.props.onLeftClick()
    }

    render() {
        let title = this.props.title || ''
        let leftTitle = this.props.leftTitle || 'language'
        let normalNaV = (
            <View style={{ height: (globalData.isStraightBangs ? 84 : 64) + 'px', backgroundColor: '#0366d6' }} className='customNavBar bgColor'>
                <View className='subNavBar'>
                    <View className='leftView' onClick={this.languageClick}>
                        <Text className='langText'>{leftTitle}</Text>
                        <AtIcon className='atIconText' value='chevron-down' size='14' color='#fff'></AtIcon>
                    </View>
                    {title ? <View className='title'>{title}</View> : ''}
                    <View className='childrenView'>
                        {this.props.children}
                    </View>
                    <View className='leftView' style={{ visibility: 'hidden' }}>
                        <Text className='langText'>{leftTitle}</Text>
                        <AtIcon className='atIconText' value='chevron-down' size='14' color='#fff'></AtIcon>
                    </View>
                </View>
            </View>
        )
        return (
            <View>
                {normalNaV}
            </View>
        )
    }
}