import { create } from 'dva-core'
import { createLogger } from 'redux-logger'
import createLoading from 'dva-loading'

let app
let store
let dispatch

const createApp = option => {
  // redux-logger
  option.onAction = [
    createLogger(),
  ]
  
  // create dva instance
  app = create(option)
  app.use(createLoading({}))

  // register models
  if (!global.registered) {
    option.models.forEach(model => {
      app.model(model)
    })
  }
  global.registered = true
  app.start()

  // store instance
  store = app._store
  app.getStore = () => store 

  // add dispatch
  dispatch = store.dispatch
  app.dispatch = dispatch
  return app
}

export default {
  createApp,
  getDispatch() {
    return app.dispatch
  }
}