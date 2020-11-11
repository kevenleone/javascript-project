import { Request, Response } from 'express'
import jwt from 'jsonwebtoken'
import { promisify } from 'util'

import UserModel from '../models/user.model'

const sign = promisify(jwt.sign)

class User {
  public async getAll (req: Request, res: Response): Promise<void> {
    const users = await UserModel.find()
    res.send({ data: users })
  }

  public async getOne (req: Request, res: Response): Promise<void> {
    const { id } = req.params
    const user = await UserModel.findById(id)
    res.send({ user })
  }

  public async store (req: Request, res: Response): Promise<void> {
    const body = req.body
    const user = await UserModel.create(body)
    res.send({ user })
  }

  public async update (req: Request, res: Response): Promise<void> {
    const {
      body,
      params: { id }
    } = req
    const user = await UserModel.updateOne({ _id: id }, body)
    res.send({ user })
  }

  public async remove (req: Request, res: Response): Promise<any> {
    const { id } = req.params
    const user = await UserModel.findByIdAndDelete(id)

    if (user) {
      res.send({ message: 'removido', user })
      return
    }

    res.status(400).send({ message: 'Usuario não existe' })
  }

  public async login (req: Request, res: Response): Promise<any> {
    const { SECRET_KEY = 'CHAVE_SECRETA' } = process.env
    const { email, password } = req.body
    const user: any = await UserModel.findOne({ email }).lean()

    if (!user) {
      return res.send({ message: 'Email não encontrado' })
    }

    if (user.password === password) {
      delete user.password
      const token = await sign(user, SECRET_KEY)
      res.send({ message: `Bem vindo, ${user.name}`, token })
    } else {
      res.send({ message: 'Senha inválida' })
    }
  }
}

export default new User()
