import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import {initWebsocket} from './websocket'
import registerServiceWorker from './registerServiceWorker'

initWebsocket()
ReactDOM.render(<App/>, document.getElementById('root'))
registerServiceWorker()
