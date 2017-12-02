let ws

export const initWebsocket = () => {
  ws = new WebSocket("ws://localhost:3002")
  window.onbeforeunload = () => ws.close()

  ws.onmessage = msg => {
    document.getElementById('target').value = JSON.parse(msg.data)
  }
}

export const send = msg => ws.send(JSON.stringify(msg))
