import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'

import './langView.scss'

export default class langView extends Taro.PureComponent {
    constructor(props) {
        super(props)
    }
    componentWillMount() { }
    render() {
        let { bgColor, title } = this.props
        return (
            <View className='langView'>
                <View className='langViewDot' style={{ backgroundColor: '#' + bgColor }}></View>
                <Text className='langViewText'>{title}</Text>
            </View>
        )
    }
}