const socketIO = require('socket.io');

module.exports.socket = (server) => {
  const io = socketIO(server, {
    pingInterval: 25000,
    pingTimeout: 5000
  });

  io.on('connection', (socket) => {
    socket.on('compaile_code', (code, callback) => {
      if (code) {
        callback({ success: true, error: null, code });
      }
      else {
        callback({ success: false, error: 'code not compaile', code });
      }
    });
  });
};
