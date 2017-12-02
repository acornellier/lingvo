let ws

export const initWebsocket = () => {
  ws = new WebSocket("ws://" + location.host)
  window.onbeforeunload = () => ws.close()

  ws.onmessage = msg => {
    const data = JSON.parse(msg.data)
    console.warn(data)
  }
}

export const send = msg => ws.send(JSON.stringify(msg))
