import { Router } from 'express'
import UserController from '../controller/user.controller'

const router = Router()

router.post('/auth', UserController.login)
router.get('/user/:id', UserController.getOne)
router.get('/user', UserController.getAll)
router.post('/user', UserController.store)
router.put('/user/:id', UserController.update)
router.delete('/user/:id', UserController.remove)

export default router
