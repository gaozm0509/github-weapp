import Taro, { PureComponent } from '@tarojs/taro'
import { View, } from '@tarojs/components'
import netWork from '../../net/netWork'
import { Loading } from '../../components/loading'
import RepoItem from '../../components/repoItem/repoItem'
import { AtSegmentedControl } from 'taro-ui'
import CustomNavBar from '../../components/customNavBar/customNavBar'
import DevItem from '../../components/devItem/devItem'
import Drawer from '../../components/trending/drawer'

import GlobalData from '../../utils/globalData'

import './index.scss'
import { from } from 'rxjs';
import { red } from 'ansi-colors';

export default class Index extends PureComponent {

  config = {
    navigationBarTitleText: '首页',
    enablePullDownRefresh: true,
    navigationStyle: 'custom'
    // onReachBottomDistance: 50,

  }
  constructor(props) {
    super(props)

    this.state = {
      data: [],
      developer: [],
      count: 0,
      isLoaded: false,
      current: 0,
      isDrawerOpen: false,
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
    if (this.state.current == 0) {
      this.request()
    } else {
      this.requestDeveloper()
    }

  }//下拉事件
  // Taro.stopPullDownRefresh()//停止下拉动作过渡

  onReachBottom() { }//上拉事件监听
  request = () => {
    let _this = this
    netWork.netRequestGet(netWork.Api.repo, undefined, false).then((res) => {
      Taro.stopPullDownRefresh()
      _this.setState({
        isLoaded: true,
        data: res.data,
        count: res.data
      })
    })
  }
  requestDeveloper = () => {
    let _this = this
    netWork.netRequestGet(netWork.Api.developer, undefined, false).then((res) => {
      Taro.stopPullDownRefresh()
      _this.setState({
        developer: res.data
      })
    })
  }

  handleClick(value) {
    this.setState({
      current: value
    })
    if (this.state.developer.length == 0) {
      this.requestDeveloper()
    }
  }

  navBarLeftClick() {
    // let _this = this
    this.setState({
      isDrawerOpen: !this.state.isDrawerOpen
    })
  }
  closeDrawer = () => {
    this.setState({
      isDrawerOpen: false
    })
  }

  render() {
    if (!this.state.isLoaded) {
      return <Loading />
    }
    let listView
    if (this.state.current == 0) {
      listView = this.state.data.map((item) => {
        return (
          <RepoItem data={item} />
        )
      })
    } else {
      listView = this.state.developer.map((item) => {
        return (
          <DevItem data={item} />
        )
      })
    }

    return (
      <View className='index pageIndex' style={{ marginTop: GlobalData.navBarHeight + 'px' }}>
        {listView}
        <Drawer onCloseDrawer={this.closeDrawer} isOpen={this.state.isDrawerOpen} />
        <CustomNavBar onLeftClick={this.navBarLeftClick.bind(this)} >
          <AtSegmentedControl
            values={['repo', 'users']}
            selectedColor='#fff'
            color='#0366d6'
            onClick={this.handleClick.bind(this)}
            current={this.state.current}
          />
        </CustomNavBar >
      </View>
    )
  }
}
