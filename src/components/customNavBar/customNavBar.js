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
import { View, CoverView, CoverImage } from '@tarojs/components'

import globalData from '../../utils/globalData'
import './customNavBar.scss'
import backWhite from './assets/back-white.png'



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
        backgroundColor: '#0366d6',
        isWhite: false,
        title: '',
        backSkip: 0,
        navBarPlaceholderHeight: (globalData.isStraightBangs ? 84 : 64)
    }


    componentWillMount() {
    }

    onNavBack(backSkip) {
        Taro.navigateBack({ delta: 1 + backSkip });

        // Taro.navigateBack();
    }

    onLeftIconClick() {
        this.props.onLeftIconClick()
    }

    render() {
        let backgroundColor = this.props.backgroundColor || '#0366d6'
        let image = this.props.image
        let isWhite = this.props.isWhite
        let title = this.props.title
        let backSkip = this.props.backSkip || 0
        // let navBarPlaceholderHeight = this.props.navBarPlaceholderHeight

        //非首页要展示 back 按钮
        let isBackShow = (Taro.getCurrentPages().length != 1)
        let isLeftIconShow = this.props.isLeftIconShow
        // 返回按钮
        let wihtiBack = (
            <CoverView onClick={this.onNavBack.bind(this, backSkip)} className='imageViewClass'>
                <CoverImage src={backWhite} aria-hidden="true" className='backWihte' />
            </CoverView>
        )

        let leftIcon = (
            <CoverView onClick={this.onLeftIconClick} className='imageViewClass'>
                <CoverImage style={{ 'top': (globalData.isStraightBangs ? 50 : 30) + 'px' }} className='leftIcon' src={this.props.leftIcon} />
            </CoverView>
        )

        // 默认的头部
        let normalNaV = (
            <View style={{ height: (globalData.isStraightBangs ? 84 : 64) + 'px', backgroundColor: backgroundColor }} className='customNavBar bgColor'>
                <View className='subNavBar'>
                    {(!isBackShow && !isLeftIconShow) ? <View className='imageViewClass'></View> : ''}
                    {isBackShow ? wihtiBack : ''}
                    {isLeftIconShow ? leftIcon : ''}
                    {title ? <View className='title'>{title}</View> : ''}
                    {this.props.children}
                    <View className='imageViewClass'></View>
                </View>
            </View>
        )

        // 头部带 log 的 nav
        let imageView = (image ? <CoverImage src={image} className='navLogo' /> : '')
        let iconNav = (
            <View style={{ height: (globalData.isStraightBangs ? 84 : 64) + 'px' }} className='customNavBar bgColor'>
                <View className='subNavBar'>
                    {isLeftIconShow ? leftIcon : ''}
                    {isBackShow ? wihtiBack : ''}
                    {(!isBackShow && !isLeftIconShow) ? <View className='backWihte'></View> : ''}
                    <View className='navLogoView'>
                        {imageView}
                        <View className='title'>{title}</View>
                    </View>

                    <View className='backWihte'></View>
                </View>
            </View>
        )

        // 白色的 nav 
        let whiteNav = (
            <CoverView style={{ height: (globalData.isStraightBangs ? 84 : 64) + 'px' }} className='customNavBar customNavWhiteBar'>
                <CoverView className='subNavBar'>
                    {isLeftIconShow ? leftIcon : ''}
                    {isBackShow ? blackBack : ''}
                    {(!isBackShow && !isLeftIconShow) ? <CoverView className='backWihte'></CoverView> : ''}
                    <CoverView className='title whiteNavTitle'>{title}</CoverView>
                    <CoverView className='backWihte'></CoverView>
                </CoverView>
            </CoverView>
        )

        return (
            <View>
                {isWhite ? whiteNav : (image ? iconNav : normalNaV)}
            </View>
        )
    }
}