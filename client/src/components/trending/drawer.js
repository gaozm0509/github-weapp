import Taro from '@tarojs/taro'
import { View, ScrollView, Input } from '@tarojs/components'
import { AtSearchBar } from 'taro-ui'
import GlobalData from '../../utils/globalData'
import NetWork from '../../net/netWork'

import './drawer.scss'

export default class Drawer extends Taro.PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            languageList: [],
            orignLanguageList: [],
        }
    }

    componentDidMount() {
        this.getLangStorage()
    }

    getLangStorage = () => {
        Taro.getStorage({
            key: 'lang',
            success: (res) => {
                if (res.data) {
                    this.setState({
                        languageList: res.data,
                        orignLanguageList: res.data
                    })
                }
            },
            fail: () => {
                this.langRequest()
            }
        })

    }

    langRequest = () => {
        NetWork.netRequestGet(NetWork.Api.lang, null, null, true).then((res) => {
            let lang = this.langGrouping(res.data)
            this.setState({
                languageList: lang,
                orignLanguageList: lang
            })
            Taro.setStorage(
                { key: 'lang', data: lang }
            )
        })
    }

    clickContainer = (e) => {
        e.stopPropagation()
    }
    click = () => {
        this.props.onCloseDrawer()
    }
    langItemClick = (item) => {
        if (item === '全部') {
            item = ''
        }
        this.props.onGetLang(item)
    }
    search = (e) => {
        if (!e) {
            this.setState({
                languageList: this.state.orignLanguageList
            })
            return
        }
        let key = e
        let reuslts = []
        for (let index = 0; index < this.state.languageList.length; index++) {
            const element = this.state.languageList[index];
            let list = []
            for (let i = 0; i < element.length; i++) {
                const item = element[i];
                if (item.toUpperCase().indexOf(key.toUpperCase()) != -1) {
                    list.push(item)
                }
            }
            if (list.length > 0) {
                reuslts.push(list)
            }

        }
        this.setState({
            languageList: reuslts
        })
    }
    langGrouping = (langList) => {
        let reuslts = []
        let fl_list = [] //首字母数组
        for (let index = 0; index < langList.length; index++) {
            const element = langList[index];
            let fl = element.slice(0, 1).toUpperCase()
            if (fl_list.indexOf(fl) == -1) {
                fl_list.push(fl)
            }
        }
        fl_list.sort()
        for (let index = 0; index < fl_list.length; index++) {
            const fl = fl_list[index];
            let list = []
            for (let j = 0; j < langList.length; j++) {
                const lang = langList[j];
                let lang_item_fl = lang.slice(0, 1).toUpperCase()
                if (fl == lang_item_fl) {
                    list.push(lang)
                }
            }
            reuslts.push(list)
        }
        reuslts.unshift(['全部'])
        return reuslts
    }

    scroll = (e) => {
        e.stopPropagation()
    }

    render() {
        let isOpen = this.props.isOpen
        let classNameDrawer
        if (isOpen == undefined) {
            classNameDrawer = 'drawer'
        } else if (isOpen) {
            classNameDrawer = 'drawerOpen drawerCustom'
        } else if (!isOpen) {
            classNameDrawer = 'drawerClose drawerCustom'
        }
        let langList = this.state.languageList
        let langView = langList.map((groupItem, index) => {
            let lf
            if (groupItem[0] != '全部') {
                lf = groupItem[0].slice(0, 1).toUpperCase()
            }
            return (
                <View className='langGroup'>
                    {lf ? <View className='langTitle'><Text>{lf}</Text></View> : ''}
                    {
                        groupItem.map((item) => {
                            return (
                                <View className='langItem' onClick={this.langItemClick.bind(this, item)}>
                                    <Text>{item}</Text>
                                </View>
                            )
                        })
                    }
                </View>


            )
        })
        return (
            <View onClick={this.click.bind(this)} className={classNameDrawer} style={{ top: GlobalData.navBarHeight + 'px', height: (GlobalData.H - GlobalData.navBarHeight) + 'px' }}>
                <View onClick={this.clickContainer.bind(this)} className={isOpen ? 'drawerContainer drawerContainerOpen' : 'drawerContainer drawerContainerClose'}>
                    <AtSearchBar onChange={this.search.bind(this)}></AtSearchBar>
                    <ScrollView style={{ overflowY: 'auto', height: (GlobalData.H - GlobalData.navBarHeight) + 'px' }} scrollY={true} onScroll={this.scroll.bind(this)} className='drawerScrollView'>
                        {langView}
                    </ScrollView>
                </View>

            </View>
        )
    }
}