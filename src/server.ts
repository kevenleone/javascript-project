import cors from 'cors'
import express from 'express'
import mongoose from 'mongoose'

class App {
  public express: express.Application;

  public constructor () {
    this.express = express()

    this.middlewares()
    this.database()
    this.routes()
  }

  private middlewares (): void {
    this.express.use(express.json())
    this.express.use(cors())
  }

  private database (): void {
    mongoose.connect('mongodb://localhost:27017/trip', {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
  }

  private routes (): void {
    this.express.get('/', (req, res): void => {
      res.send('Working !!!')
    })
  }
}

export default new App().express
