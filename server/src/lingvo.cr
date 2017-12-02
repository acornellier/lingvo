require "kemal"

CLIENT_PATH = "../client/"
BUILD_PATH = CLIENT_PATH + "build/"

public_folder BUILD_PATH

sockets = [] of HTTP::WebSocket

get "/" do
  render "../client/views/index.ecr"
end

ws "/" do |socket|
  puts "Opening Socket: #{socket}"
  sockets << socket
  
  socket.on_message do |message|
    sockets.each do |a_socket|
      a_socket.send message.to_json
    end
  end

  socket.on_close do |_|
    sockets.delete(socket)
    puts "Closing Socket: #{socket}"
  end
end

Kemal.run(port: 3001)
