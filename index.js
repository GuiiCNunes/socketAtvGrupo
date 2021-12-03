const express = require('express');
const app = express();
const http = require("http").createServer(app);
const cors = require("cors");
// const bodyParser = require("body-parser");

const io = require("socket.io")(http, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["POST", "GET"],
  },
});

const PORT = 3000;

// app.use(express.json());
app.use(cors());

app.use(express.static(__dirname + '/public'));

require("./src/sockets/price")(io);

http.listen(PORT, () => console.log("App listening on PORT %s", PORT));