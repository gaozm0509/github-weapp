import Taro from '@tarojs/taro'
import { View, ScrollView, Input } from '@tarojs/components'
import { AtSearchBar } from 'taro-ui'
import GlobalData from '../../utils/globalData'

import './drawer.scss'

export default class Drawer extends Taro.PureComponent {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        this.langGrouping()
    }
    clickContainer = (e) => {
        e.stopPropagation()
        console.log(11)
    }
    click = () => {
        this.props.onCloseDrawer()
    }
    langGrouping = (langList) => {
        langList = ['aiuewo', 'aiuewo', 'aiuewo', 'biuewo', 'biuewo', 'miuewo']
        let reusts = []
        let fl_list = [] //首字母数组
        for (let index = 0; index < langList.length; index++) {
            const element = langList[index];
            let fl = element.slice(0, 1).toUpperCase()
            if (fl_list.indexOf(fl) == -1) {
                fl_list.push(fl)
            }
        }
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
            reusts.push(list)
        }
        return reusts
    }
    render() {
        let isOpen = this.props.isOpen

        // let langView = langList.map((item, index) => {

        // })
        return (
            <View onClick={this.click.bind(this)} className={isOpen ? 'drawer drawerOpen' : 'drawer drawerClose'} style={{ top: GlobalData.navBarHeight + 'px', height: (GlobalData.H - GlobalData.navBarHeight) + 'px' }}>
                <View onClick={this.clickContainer.bind(this)} className={isOpen ? 'drawerContainer drawerContainerOpen' : 'drawerContainer drawerContainerClose'}>
                    <AtSearchBar></AtSearchBar>
                    <ScrollView className='drawerScrollView'></ScrollView>
                </View>

            </View>
        )
    }
}