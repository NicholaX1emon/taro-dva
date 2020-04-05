const model = {
  namespace: 'global',
  state: {
    app: null,
    number: 0,
  },
  subscriptions: {
    setup({dispatch, history}) {
      // console.log('setup ---')
      console.log(history) // undefined -- no router integrated
      
    }
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
    injectAppInstance(state, {payload}) {
      return {
        ...state,
        app: payload,
      }
    },
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
}

export default [model]