import Taro from '@tarojs/taro'
import { AtGrid } from 'taro-ui'
import { View } from '@tarojs/components'
import Api from '../../net/api'
import { Loading } from '../../components/loading'

import icon_text_fork from '../../assets/images/icon_text_fork.svg'

import './repoDetail.scss'
import { loadavg } from 'os';

export default class RepoDetail extends Taro.PureComponent {
    // config = {navigationBarTitleText:''}
    config = {
        usingComponents: {
            wemark: '../../wemark/wemark'
        }
    }
    constructor(props) {
        super(props)
        this.state = {
            md: '',
            data: {},
            repo: '',
            isLoaded: false
        }
    }
    componentWillMount() { }

    componentDidMount = () => {
        this.state.repo = this.$router.params.repo
        this.requestDetails()
        this.requestMD()
    }
    requestDetails = () => {
        Taro.cloud.callFunction({
            name: 'api',
            data: {
                type: Api.cloudApiTypeV3,
                api: 'repos/' + this.state.repo
            }
        }).then((res) => {
            this.setState({
                data: res.result,
                isLoaded: true
            })
        })
    }
    requestMD = () => {
        Taro.cloud.callFunction({
            name: 'api',
            data: {
                type: Api.cloudApiTypeMD,
                api: this.state.repo
            }
        }).then((res) => {
            this.setState({
                md: res.result
            })
            console.log(res.result)
        })
    }

    render() {

        if (!this.state.isLoaded) {
            return (
                <Loading />
            )
        }

        let gridData = [
            {
                image: icon_text_fork,
                value: this.state.data.watchers
            },
            {
                image: icon_text_fork,
                value: this.state.data.forks
            },
            {
                image: icon_text_fork,
                value: this.state.data.subscribers_count
            },
            {
                image: icon_text_fork,
                value: this.state.data.open_issues
            },
            {
                image: icon_text_fork,
                value: 'commits'
            },
            {
                image: icon_text_fork,
                value: 'contributors'
            },
        ]
        return (
            <View className='repoDetail'>
                <View className='desView mainBgColor'><Text>{this.state.data.description}</Text></View>
                <View className='atGridView'>
                    <View className='titleView'>
                        <Text>操作</Text>
                    </View>
                    <AtGrid data={gridData}></AtGrid>
                </View>
                <View className='atGridView readmeView'>
                    <View className='titleView'>
                        <Text>README</Text>
                    </View>
                    <View className='readme'>
                        <wemark md={this.state.md ? this.state.md : 'loading...'} link highlight type='wemark' />
                    </View>
                </View >
            </View>
        )
    }
}