const model = {
  namespace: 'home',
  state: {
    title: '',
  },
  subscriptions: {
    setup({dispatch, history}) {
      console.log('----model home setup---')
      
    }
  },
  effects: {
    *fetchHome({payload}, { call, put, select }) {
      yield put({
        type: 'fetchHomeSuccess',
        payload,
      })
    }
  },
  reducers: {
    fetchHomeSuccess(state, {payload}) {
      return {
        ...state,
        title: payload,
      }
    },
  }
}

export default model