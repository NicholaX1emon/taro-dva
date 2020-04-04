/* eslint-disable react/sort-comp */
import Taro, { Component } from '@tarojs/taro'
import { Provider } from '@tarojs/redux'
import Index from './pages/index'

import dva from './utils/dva'
import './app.less'

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

const dvaApp = dva.createApp({
  initialState:{},
  models: [
    {
      namespace: 'global',
      state: {
        number: 0,
      },
      subscriptions: {
        // setup({dispatch, history}) {
        //   console.log(dispatch)
        //   console.log(history) // undefined -- no router integrated
        // }
      },
      effects: {
        *fetchGlobal({payload}, { call, put, select }) {
          // console.log(action, call, put , select)
          yield put({
            type: 'fetchGlobalSuccess',
            payload,
          })
        }
      },
      reducers: {
        fetchGlobalSuccess(state, {payload}) {
          console.log('-----------after effect-----------', payload)
          return {
            ...state,
            payload,
          }
        },
        increaseNumberBy(state, {payload}) {
          return {
            ...state,
            number: state.number + payload.number
          }
        }
      }
    },
  ],
})

const store = dvaApp.getStore()

class App extends Component {

  config = {
    pages: [
      'pages/index/index'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    }
  }

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <Provider store={store}>
        <Index />
      </Provider>
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
