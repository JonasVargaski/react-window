import socketio from 'socket.io-client';

const socket = socketio('http://localhost:3000', {
  autoConnect: false,
});

function subscribe(key, fn) {
  socket.on(key, fn);
}

function unsubscribe(key, fn) {
  socket.off(key, fn);
}

function publish(key, data) {
  socket.emit(key, data);
}

function connect(opts) {
  socket.io.opts.query = opts;
  socket.connect();
}

function disconnect() {
  if (socket.connected) {
    socket.disconnect();
  }
}

export default {
  io: socket,
  subscribe,
  unsubscribe,
  publish,
  connect,
  disconnect,
};
