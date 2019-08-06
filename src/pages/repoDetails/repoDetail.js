import Taro from '@tarojs/taro'
import { AtGrid } from 'taro-ui'
import { View } from '@tarojs/components'

import icon_text_fork from '../../assets/images/icon_text_fork.svg'

import './repoDetail.scss'

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
            data: {
                "id": 9384267,
                "node_id": "MDEwOlJlcG9zaXRvcnk5Mzg0MjY3",
                "name": "electron",
                "full_name": "electron/electron",
                "private": false,
                "owner": {
                    "login": "electron",
                    "id": 13409222,
                    "node_id": "MDEyOk9yZ2FuaXphdGlvbjEzNDA5MjIy",
                    "avatar_url": "https://avatars1.githubusercontent.com/u/13409222?v=4",
                    "gravatar_id": "",
                    "url": "https://api.github.com/users/electron",
                    "html_url": "https://github.com/electron",
                    "followers_url": "https://api.github.com/users/electron/followers",
                    "following_url": "https://api.github.com/users/electron/following{/other_user}",
                    "gists_url": "https://api.github.com/users/electron/gists{/gist_id}",
                    "starred_url": "https://api.github.com/users/electron/starred{/owner}{/repo}",
                    "subscriptions_url": "https://api.github.com/users/electron/subscriptions",
                    "organizations_url": "https://api.github.com/users/electron/orgs",
                    "repos_url": "https://api.github.com/users/electron/repos",
                    "events_url": "https://api.github.com/users/electron/events{/privacy}",
                    "received_events_url": "https://api.github.com/users/electron/received_events",
                    "type": "Organization",
                    "site_admin": false
                },
                "html_url": "https://github.com/electron/electron",
                "description": ":electron: Build cross-platform desktop apps with JavaScript, HTML, and CSS",
                "fork": false,
                "url": "https://api.github.com/repos/electron/electron",
                "forks_url": "https://api.github.com/repos/electron/electron/forks",
                "keys_url": "https://api.github.com/repos/electron/electron/keys{/key_id}",
                "collaborators_url": "https://api.github.com/repos/electron/electron/collaborators{/collaborator}",
                "teams_url": "https://api.github.com/repos/electron/electron/teams",
                "hooks_url": "https://api.github.com/repos/electron/electron/hooks",
                "issue_events_url": "https://api.github.com/repos/electron/electron/issues/events{/number}",
                "events_url": "https://api.github.com/repos/electron/electron/events",
                "assignees_url": "https://api.github.com/repos/electron/electron/assignees{/user}",
                "branches_url": "https://api.github.com/repos/electron/electron/branches{/branch}",
                "tags_url": "https://api.github.com/repos/electron/electron/tags",
                "blobs_url": "https://api.github.com/repos/electron/electron/git/blobs{/sha}",
                "git_tags_url": "https://api.github.com/repos/electron/electron/git/tags{/sha}",
                "git_refs_url": "https://api.github.com/repos/electron/electron/git/refs{/sha}",
                "trees_url": "https://api.github.com/repos/electron/electron/git/trees{/sha}",
                "statuses_url": "https://api.github.com/repos/electron/electron/statuses/{sha}",
                "languages_url": "https://api.github.com/repos/electron/electron/languages",
                "stargazers_url": "https://api.github.com/repos/electron/electron/stargazers",
                "contributors_url": "https://api.github.com/repos/electron/electron/contributors",
                "subscribers_url": "https://api.github.com/repos/electron/electron/subscribers",
                "subscription_url": "https://api.github.com/repos/electron/electron/subscription",
                "commits_url": "https://api.github.com/repos/electron/electron/commits{/sha}",
                "git_commits_url": "https://api.github.com/repos/electron/electron/git/commits{/sha}",
                "comments_url": "https://api.github.com/repos/electron/electron/comments{/number}",
                "issue_comment_url": "https://api.github.com/repos/electron/electron/issues/comments{/number}",
                "contents_url": "https://api.github.com/repos/electron/electron/contents/{+path}",
                "compare_url": "https://api.github.com/repos/electron/electron/compare/{base}...{head}",
                "merges_url": "https://api.github.com/repos/electron/electron/merges",
                "archive_url": "https://api.github.com/repos/electron/electron/{archive_format}{/ref}",
                "downloads_url": "https://api.github.com/repos/electron/electron/downloads",
                "issues_url": "https://api.github.com/repos/electron/electron/issues{/number}",
                "pulls_url": "https://api.github.com/repos/electron/electron/pulls{/number}",
                "milestones_url": "https://api.github.com/repos/electron/electron/milestones{/number}",
                "notifications_url": "https://api.github.com/repos/electron/electron/notifications{?since,all,participating}",
                "labels_url": "https://api.github.com/repos/electron/electron/labels{/name}",
                "releases_url": "https://api.github.com/repos/electron/electron/releases{/id}",
                "deployments_url": "https://api.github.com/repos/electron/electron/deployments",
                "created_at": "2013-04-12T01:47:36Z",
                "updated_at": "2019-08-04T08:52:07Z",
                "pushed_at": "2019-08-04T03:11:02Z",
                "git_url": "git://github.com/electron/electron.git",
                "ssh_url": "git@github.com:electron/electron.git",
                "clone_url": "https://github.com/electron/electron.git",
                "svn_url": "https://github.com/electron/electron",
                "homepage": "https://electronjs.org",
                "size": 62176,
                "stargazers_count": 75817,
                "watchers_count": 75817,
                "language": "C++",
                "has_issues": true,
                "has_projects": true,
                "has_downloads": true,
                "has_wiki": false,
                "has_pages": false,
                "forks_count": 9928,
                "mirror_url": null,
                "archived": false,
                "disabled": false,
                "open_issues_count": 1351,
                "license": {
                    "key": "mit",
                    "name": "MIT License",
                    "spdx_id": "MIT",
                    "url": "https://api.github.com/licenses/mit",
                    "node_id": "MDc6TGljZW5zZTEz"
                },
                "forks": 9928,
                "open_issues": 1351,
                "watchers": 75817,
                "default_branch": "master",
                "organization": {
                    "login": "electron",
                    "id": 13409222,
                    "node_id": "MDEyOk9yZ2FuaXphdGlvbjEzNDA5MjIy",
                    "avatar_url": "https://avatars1.githubusercontent.com/u/13409222?v=4",
                    "gravatar_id": "",
                    "url": "https://api.github.com/users/electron",
                    "html_url": "https://github.com/electron",
                    "followers_url": "https://api.github.com/users/electron/followers",
                    "following_url": "https://api.github.com/users/electron/following{/other_user}",
                    "gists_url": "https://api.github.com/users/electron/gists{/gist_id}",
                    "starred_url": "https://api.github.com/users/electron/starred{/owner}{/repo}",
                    "subscriptions_url": "https://api.github.com/users/electron/subscriptions",
                    "organizations_url": "https://api.github.com/users/electron/orgs",
                    "repos_url": "https://api.github.com/users/electron/repos",
                    "events_url": "https://api.github.com/users/electron/events{/privacy}",
                    "received_events_url": "https://api.github.com/users/electron/received_events",
                    "type": "Organization",
                    "site_admin": false
                },
                "network_count": 9928,
                "subscribers_count": 2775
            }
        }
    }
    componentWillMount() { }

    componentDidMount = () => {
        this.requestMD()
    }
    requestMD() {
        let _thist = this
        Taro.request({
            url: 'https://raw.githubusercontent.com/ZyqGitHub1/h-player-v2/master/README.md',
            success: (res) => {
                this.setState({
                    md: res.data
                })
            }
        })
    }

    render() {
        let gridData = [
            {
                image: icon_text_fork,
                value: this.state.data.watchers.toString()
            },
            {
                image: icon_text_fork,
                value: this.state.data.forks.toString()
            },
            {
                image: icon_text_fork,
                value: this.state.data.subscribers_count.toString()
            },
            {
                image: icon_text_fork,
                value: this.state.data.open_issues.toString()
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