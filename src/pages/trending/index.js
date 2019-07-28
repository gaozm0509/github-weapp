import Taro, { PureComponent } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import netWork from '../../net/netWork'
import { Loading } from '../../components/loading'

import './index.scss'
import { from } from 'rxjs';
import { red } from 'ansi-colors';

export default class Index extends PureComponent {

  config = {
    navigationBarTitleText: '首页',
    enablePullDownRefresh: true,
    onReachBottomDistance: 50,
  }
  constructor(props) {
    super(props)

    this.status = {
      data: [],
      count: 0,
      isLoaded: false,
    }
  }

  componentWillMount() {
  }

  componentDidMount() {
    this.request()
  }


  onPullDownRefresh() {
    this.setState({
      isLoaded: false,
    })
    this.request()
  }//下拉事件
  // Taro.stopPullDownRefresh()//停止下拉动作过渡

  onReachBottom() { }//上拉事件监听
  request = () => {
    let params = {

    }
    /**
     * added_stars: "116 stars today"
      avatars: (5) ["https://avatars0.githubusercontent.com/u/23621655?s=40&v=4", "https://avatars3.githubusercontent.com/u/43715439?s=40&v=4", "https://avatars2.githubusercontent.com/u/23149796?s=40&v=4", "https://avatars3.githubusercontent.com/u/47393639?s=40&v=4", "https://avatars1.githubusercontent.com/u/43502196?s=40&v=4"]
      desc: "This is an attempt to modify Dive into Deep Learning, Berkeley STAT 157 (Spring 2019) textbook's code into PyTorch."
      forks: "65"
      lang: "Jupyter Notebook"
      repo: "dsgiitr/d2l-pytorch"
      repo_link: "https://github.com/dsgiitr/d2l-pytorch"
      stars: "301"
     */
    let _this = this
    netWork.trendingNetRequestGet(netWork.Api.repo, undefined, true).then((res) => {
      Taro.stopPullDownRefresh()
      _this.setState({
        isLoaded: true,
        data: res.data.item,
        count: res.data.count
      })
    })
  }


  render() {
    if (!this.state.isLoaded) {
      return <Loading />
    }
    return (
      <View className='index'>
        <Text>Hello world!</Text>
      </View>
    )
  }
}
