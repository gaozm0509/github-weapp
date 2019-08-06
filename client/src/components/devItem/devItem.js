import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'

import './DevItem.scss'

export default class DevItem extends Taro.PureComponent {
  constructor (props) {
    super(props)
  }
  componentWillMount () {}
  render () {
      let _data = this.props.data || {}
    return (
      <View className = 'devItem'>
          <View className ='avatarView'>
              <Image src = {_data.avatar}/>
          </View>
          <View className = 'rightView'>
              <Text className = 'fullName'>{_data.full_name}</Text>
              <Text className = 'name'>{_data.name}</Text>
              <Text className = 'app'>{_data.app}</Text>
              <Text className = 'appDes'>{_data.app_des}</Text>
          </View>
      </View>
    )
  }
}