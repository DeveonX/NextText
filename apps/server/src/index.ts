import http from 'http';
import SocketService from './services/socket';
const express = require('express')
import { Request, Response } from 'express';

async function init(){
  const app = express()
  const socketService = new SocketService();

  const httpServer = http.createServer(app)

  app.get('/', (req: Request, res: Response)=>{
    res.send("Server is running")
  })
  const PORT = process.env.PORT ? process.env.PORT : 8000

  socketService.io.attach(httpServer)

  httpServer.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
  })

  socketService.initListeners()
}

init()