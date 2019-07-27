import Taro, { PureComponent } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import netWork from '../../net/netWork'

import './index.scss'

export default class Index extends PureComponent {

  config = {
    navigationBarTitleText: '首页',
  }
  constructor(props) {
    super(props)

    this.status = {

    }
  }

  componentWillMount() {
  }

  componentDidMount() {
    this.request()
  }

  request = () => {
    let params = {

    }
    netWork.netRequestGet(netWork.Api.trending).then((res) => {
      console.log(res)
    })
  }


  render() {
    return (
      <View className='index'>
        <Text>Hello world!</Text>
      </View>
    )
  }
}
