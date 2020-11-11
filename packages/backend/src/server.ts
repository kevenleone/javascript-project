import cors from 'cors'
import express from 'express'
import mongoose from 'mongoose'
import morgan from 'morgan'
import UserRouter from './routes/user.route'
import dotenv from 'dotenv'
dotenv.config()

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
    this.express.use(morgan('dev'))
  }

  private database (): void {
    const MONGO_URL = process.env.MONGO_URL || ''
    console.log(MONGO_URL)
    mongoose.connect(MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
  }

  private routes (): void {
    this.express.use('/api', UserRouter)
  }
}

export default new App().express
