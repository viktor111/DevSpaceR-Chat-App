const express = require("express")
const socketio = require("socket.io")
const http = require("http")

const PORT = process.env.PORT || 4040;

const chatRouter = require("./router/chat")

const app = express()
const server = http.createServer(app)
const io = socketio(server)

app.use(chatRouter)

io.on("connection", socket => {
    console.log("[+] New connection established")
})

server.listen(PORT, () =>{
    console.log("[+] Server listening on port 4040...")
})