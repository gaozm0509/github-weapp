import Taro from '@tarojs/taro'
import { AtGrid } from 'taro-ui'
import { View } from '@tarojs/components'
import Api from '../../net/api'
import { Loading } from '../../components/loading'

import icon_text_fork from '../../assets/images/icon_text_fork.svg'
import icon_text_star from '../../assets/images/icon_text_star.svg'
import repo_commit from '../../assets/images/repo_commit.svg'
import repo_eye from '../../assets/images/repo_eye.svg'
import repo_issue from '../../assets/images/repo_issue.svg'
import repo_contributors from '../../assets/images/repo_contributors.svg'


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
            md: 'loading...',
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
                api: this.state.repo,
            },
            success: res => {
                this.setState({
                    md: res.result
                })
            },
            fail: res => {
                this.setState({
                    md: '请求失败，点击重试'
                })
            }
        })
    }

    readmeRequestAgain = () => {
        if (this.state.md == '请求失败，点击重试') {
            this.setState({
                md: 'loading...'
            })
            this.requestMD()
        }
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
                value: this.state.data.watchers // star
            },
            {
                image: icon_text_star,
                value: this.state.data.forks
            },
            {
                image: repo_eye,
                value: this.state.data.subscribers_count //watch
            },
            {
                image: repo_issue,
                value: 'issues(' + this.state.data.open_issues + ')'
            },
            {
                image: repo_commit,
                value: 'commits'
            },
            {
                image: repo_contributors,
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
                    <View className='readme' onClick={this.readmeRequestAgain}>
                        <wemark md={this.state.md} link highlight type='wemark' />
                    </View>
                </View >
            </View>
        )
    }
}