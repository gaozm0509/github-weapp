import Taro from '@tarojs/taro'
import { View, Image } from '@tarojs/components'
import { Loading } from '../../components/loading'
import repo_code from '../../assets/images/repo_code.svg'
import doc from '../../assets/images/doc.svg'
import Api from '../../net/api'
import { AtIcon } from 'taro-ui'

import './repoCodes.scss'

export default class RepoCodes extends Taro.PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            isLoaded: false,
            data: [],
            api: ''
        }
    }
    componentWillMount() { }
    componentDidMount = () => {
        this.state.api = this.$router.params.api
        this.request()
    }

    request = () => {
        Taro.cloud.callFunction({
            name: 'api',
            data: {
                type: Api.cloudApiTypeV3,
                api: this.state.api
            }
        }).then((res) => {
            this.setState({
                data: res.result,
                isLoaded: true
            })
        })
    }
    render() {
        if (!this.state.isLoaded) {
            return <Loading></Loading>
        }

        let list = this.state.data.map(item => {
            // type :dir || file
            return (
                <View className='item'>
                    <View className='leftView'>
                        <Image src={item.type == 'file' ? doc : repo_code} className={item.type == 'file' ? 'image imageFile' : 'image'}></Image>
                        <Text className='textColor title'>{item.name}</Text>
                    </View>
                    <View className='arrowView textColor'>
                        <AtIcon value='chevron-right' size={20} customStyle={{ display: item.type == 'file' ? 'none' : 'block' }}></AtIcon>
                    </View>
                </View>
            )

        })
        return (
            <View className='repoCodes'>
                {list}
            </View>
        )
    }
}