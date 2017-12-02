import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import configureStore from './configureStore'
import './index.css'
import App from './App'
import {initWebsocket} from './websocket'

const store = configureStore()
initWebsocket(store)

const render = () =>
  ReactDOM.render(
    <Provider store={store}>
      <App/>
    </Provider>
    , document.getElementById('root')
  )
render()

if (module.hot){
  module.hot.accept('./App', render)
}