import {receiveLanguages} from "./reducers/root"

let ws

export const initWebsocket = (store) => {
  ws = new WebSocket("ws://localhost:3002")

  window.onbeforeunload = () => ws.close()

  ws.onmessage = msg => {
    const data = JSON.parse(msg.data)
    switch (data.type) {
      case 'languages':
        store.dispatch(receiveLanguages(data.data))
        break
    }
  }
}

export const send = msg => ws.send(JSON.stringify(msg))
