import Taro from '@tarojs/taro'
import { View, Image } from '@tarojs/components'
import './iconTextView.scss'

export default class IconTextView extends Taro.PureComponent {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    componentWillMount() { }
    render() {
        let { title, image } = this.props
        return (
            <View className='iconTextView'>
                <Image src={image} className = 'iconTextImage'/>
                <Text className = 'iconTextText'>{title}</Text>
            </View>
        )
    }
}