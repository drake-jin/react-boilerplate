import { createStore, applyMiddleware, compose } from 'redux'
import penderMiddleware from 'redux-pender'
import ReduxThunk from 'redux-thunk'
import modules from './reducers'

const isDev = process.env.NODE_ENV === 'development' || true

const devtools = isDev ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : () => fn => fn
const composeEnhancers = devtools || compose

const configureStore = (initialState) => {
  const enhancers = [
    composeEnhancers(applyMiddleware(penderMiddleware(), ReduxThunk)),
  ]

  const store = createStore(
    modules,
    initialState,
    compose(...enhancers),
  )

  if (module.hot) {
    module.hot.accept('./reducers', () => store.replaceReducer(modules))
  }

  return store
}

export default configureStore
