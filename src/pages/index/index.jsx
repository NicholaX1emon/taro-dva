import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { connect } from '@tarojs/redux'

import './index.less'


// @connect(state => ({
//   global: state.global,
//   loading: state.loading,
// }))
class Index extends Component {

  config = {
    navigationBarTitleText: '首页'
  }

  componentWillMount () { }

  componentDidMount () {
    console.log('this.props ---', this.props)
    this.props.dispatch({
      type: 'global/fetchGlobal',
      payload: '憨憨脚手架搞劳资一天',
    })
    // this.props.dispatch({
    //   type: 'global/increaseNumberBy',
    //   payload: {
    //     number: 3,
    //   }
    // })
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>
        <Text>Hello world!</Text>
      </View>
    )
  }
}

const mapStateToProps = state => ({
  global: state.global,
  loading: state.loading,
})

export default connect(mapStateToProps)(Index)
