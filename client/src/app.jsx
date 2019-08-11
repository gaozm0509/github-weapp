import Taro, { Component } from '@tarojs/taro'
import Index from './pages/index'

import './app.scss'

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

class App extends Component {

  config = {
    pages: [
      'pages/trending/index',
      'pages/topics/index',
      'pages/me/index',
      'pages/repoDetails/repoDetail',
      'pages/repoDetails/repoCodes'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#0366d6',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'white'
    },
    tabBar: {
      list: [
        {
          pagePath: "pages/trending/index",
          text: "trending",
          iconPath: "./assets/images/tabbar0.png",
          selectedIconPath: "./assets/images/tabbar_selected0.png"
        },
        {
          pagePath: "pages/topics/index",
          text: "topics",
          iconPath: "./assets/images/tabbar1.png",
          selectedIconPath: "./assets/images/tabbar_selected1.png"
        },
        {
          pagePath: "pages/me/index",
          text: "me",
          iconPath: "./assets/images/tabbar2.png",
          selectedIconPath: "./assets/images/tabbar_selected2.png"
        },
      ],
      color: '#586069',
      selectedColor: '#0366d6',
      backgroundColor: '#fff',
      borderStyle: 'black'
    },
    cloud: true
  }

  componentDidMount() {
    if (process.env.TARO_ENV === 'weapp') {
      Taro.cloud.init()
    }
  }

  componentDidShow() { }

  componentDidHide() { }

  componentDidCatchError() { }

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render() {
    return (
      <Index />
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
