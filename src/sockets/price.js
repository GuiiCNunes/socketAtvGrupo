let mediaDePreco = [0, 0, 0];

module.exports = (io) => {
  io.on('connection', (socket) => {
    socket.emit('sendPrices', { mediaDePreco });

    socket.on('addPrice', (prices) => {
      mediaDePreco = prices;
      io.emit('sendPrices', { mediaDePreco });
    });
  });
};