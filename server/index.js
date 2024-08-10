require("dotenv").config();
const express = require("express");
const router = require("./routes.js");
const DbConnect = require("./database.js");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const ACTIONS = require("./actions.js");
const app = express();

const server = require("http").createServer(app);

const io = require("socket.io")(server, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
  },
});

app.use(cookieParser());

const corsOption = {
  origin: ["http://localhost:5173"],
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE"],
};

app.use(cors(corsOption));
app.use("/storage", express.static("storage"));

app.use(
  express.json({
    limit: "8mb",
  })
);

const PORT = process.env.PORT || 3000;

DbConnect();

app.use(router);

app.get("/", (req, res) => {
  res.send("Hello from express");
});

// Sockets
const socketUserMapping = {};

io.on("connection", (socket) => {
  console.log("new connection", socket.id);

  socket.on(ACTIONS.JOIN, ({ roomId, user }) => {
    socketUserMapping[socket.id] = user;

    // new Map
    const clients = Array.from(io.sockets.adapter.rooms.get(roomId) || []);

    clients.forEach((clientId) => {
      io.to(clientId).emit(ACTIONS.ADD_PEER, {
        peerId: clientId,
        createOffer: false,
        user,
      });
      socket.emit(ACTIONS.ADD_PEER, {
        peerId: clientId,
        createOffer: true,
        user: socketUserMapping[clientId],
      });
    });
    socket.join(roomId);
  });

  // handle relay Ice
  socket.on(ACTIONS.RELAY_ICE, ({ peerId, icecandidate }) => {
    io.to(peerId).emit(ACTIONS.ICE_CANDIDATE, {
      peerId: socket.id,
      icecandidate,
    });
  });

  // Handle relay sdp (session description)
  socket.on(ACTIONS.RELAY_SDP, ({ peerId, sessionDescription }) => {
    io.to(peerId).emit(ACTIONS.SESSION_DESCRIPTION, {
      peerId: socket.id,
      sessionDescription,
    });
  });

  // Leaving the room
  const leaveRoom = ({ roomId }) => {
    const { rooms } = socket;
    Array.from(rooms).forEach((roomId) => {
      const clients = Array.from(io.sockets.adapter.rooms.get(roomId) || []);
      clients.forEach((clientId) => {
        io.to(clientId).emit(ACTIONS.REMOVE_PEER, {
          peerId: socket.id,
          userId: socketUserMapping[socket.id].id,
        });
        socket.emit(ACTIONS.REMOVE_PEER, {
          peerId: clientId,
          userId: socketUserMapping[clientId].id,
        });
      });
      socket.leave(roomId);
    });
  };
  socket.on(ACTIONS.LEAVE, leaveRoom);
});

server.listen(PORT, (req, res) => {
  console.log(`Server is listening on port ${PORT}`);
});
