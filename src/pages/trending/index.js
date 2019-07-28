import Taro, { PureComponent } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import netWork from '../../net/netWork'
import { Loading } from '../../components/loading'
import RepoItem from '../../components/repoItem/repoItem'

import './index.scss'
import { from } from 'rxjs';
import { red } from 'ansi-colors';

export default class Index extends PureComponent {

  config = {
    navigationBarTitleText: '首页',
    enablePullDownRefresh: true,
    // onReachBottomDistance: 50,
  }
  constructor(props) {
    super(props)

    this.state = {
      data: [],
      count: 0,
      isLoaded: false,
    }
  }

  onShareAppMessage() {

  }
  componentWillMount() {
  }

  componentDidMount() {
    this.request()
  }


  onPullDownRefresh() {
    this.request()
  }//下拉事件
  // Taro.stopPullDownRefresh()//停止下拉动作过渡

  onReachBottom() { }//上拉事件监听
  request = () => {
    let _this = this
    netWork.trendingNetRequestGet(netWork.Api.repo, undefined, true).then((res) => {
      Taro.stopPullDownRefresh()
      _this.setState({
        isLoaded: true,
        data: res.data.items,
        count: res.data.count
      })
    })
  }


  render() {
    if (!this.state.isLoaded) {
      return <Loading />
    }
    let list = this.state.data.map((item) => {
      return (
        <RepoItem data={item} />
      )
    })
    return (

      <View className='index pageIndex'>
        {list}
      </View>
    )
  }
}
