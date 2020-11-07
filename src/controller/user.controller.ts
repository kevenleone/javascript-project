import { Request, Response } from 'express'
import UserModel from '../models/user.model'

class User {
  public async getAll (req: Request, res: Response): Promise<void> {
    const users = await UserModel.find()
    res.send({ users })
  }

  public getOne (req: Request, res: Response): void {
    res.send({ message: 'getOne' })
  }

  public async store (req: Request, res: Response): Promise<void> {
    const body = req.body
    const user = await UserModel.create(body)
    res.send({ user })
  }

  public update (req: Request, res: Response): void {
    res.send({ message: 'updateUser' })
  }

  public remove (req: Request, res: Response): void {
    res.send({ message: 'removeUser' })
  }
}

export default new User()
