import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import model from './model'

import './index.less'


let is_registerd = false

@connect(state => ({
  app: state.global.app,
  global: state.global,
  loading: state.loading,
}))
class Home extends Component {

  config = {
    navigationBarTitleText: '首页'
  }

  constructor(props) {
    super(props)
    const { app } = props
    if (!is_registerd) {
      app.model(model)
      is_registerd = true
    }
  }

  componentWillMount () { }

  componentDidMount () {
    console.log('this.props ---', this.props)
    this.props.dispatch({
      type: 'home/fetchHome',
      payload: 'page model registerd',
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
        <Text>Im coming home</Text>
      </View>
    )
  }
}

export default Home

// const mapStateToProps = state => ({
//   global: state.global,
//   loading: state.loading,
// })

// export default connect(mapStateToProps)(Index)
