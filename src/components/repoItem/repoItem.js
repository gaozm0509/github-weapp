import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import IconTextView from './iconTextView'
import LangView from './langView'
import icon_text_fork from '../../assets/images/icon_text_fork.svg'
import icon_text_star from '../../assets/images/icon_text_star.svg'

import './repoItem.scss'

export default class RepoItem extends Taro.PureComponent {
    constructor(props) {
        super(props)
        this.status = {
            _data: {}
        }
    }


    componentWillMount() { }
    render() {
        let _data = this.props.data || {}
        let avatars = _data.avatars || []
        let avatarsView
        if (avatars.length > 0) {
            avatarsView = <View className='bottomView'>
                <View className='buildBy'>
                    {
                        avatars.map((item, index) => {
                            return <Image className={'avatarImage' + ' avatarImage' + index} src={item} />
                        })
                    }
                </View>
                {_data.added_stars ? <IconTextView title={_data.added_stars} image={icon_text_star} /> : ''}


            </View>

        } else {
            ''
        }
        return (
            /*** added_stars: "116 stars today"
      avatars: (5) ["https://avatars0.githubusercontent.com/u/23621655?s=40&v=4", "https://avatars3.githubusercontent.com/u/43715439?s=40&v=4", "https://avatars2.githubusercontent.com/u/23149796?s=40&v=4", "https://avatars3.githubusercontent.com/u/47393639?s=40&v=4", "https://avatars1.githubusercontent.com/u/43502196?s=40&v=4"]
      desc: "This is an attempt to modify Dive into Deep Learning, Berkeley STAT 157 (Spring 2019) textbook's code into PyTorch."
      forks: "65"
      lang: "Jupyter Notebook"
      repo: "dsgiitr/d2l-pytorch"
      repo_link: "https://github.com/dsgiitr/d2l-pytorch"
      stars: "301"
     */
            <View className='repoItemView'>
                <View className='title'>
                    <Text>{_data.repo}</Text>
                </View>
                <View className='desc'>{_data.desc}</View>
                <View className='prop'>
                    {_data.lang ? <View className='langView'><LangView title={_data.lang} bgColor={_data.lang_color} /> </View> : ''}
                    {_data.stars ? <View className={_data.lang ? 'propItem' : ''}><IconTextView title={_data.stars} image={icon_text_star} /></View> : ''}
                    {_data.forks ? <View className={(_data.lang || _data.stars) ? 'propItem' : ''}><IconTextView title={_data.forks} image={icon_text_fork} /></View> : ''}
                </View>
                {avatarsView}
            </View>
        )
    }
}