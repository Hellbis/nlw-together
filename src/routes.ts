import { Router, Request, Response } from 'express'
import { CreateUserController } from './controller/CreateUserController'
import { CreateTagController } from './controller/CreateTagController'
import { ensureAdmin } from './middlewares/ensureAdmin'

const router = Router()

const createUserController = new CreateUserController()
const createTagController = new CreateTagController()

router.get('/', (request: Request, response: Response) => {
    return response.json({ message: 'Bem vindo a api!'})
})

router.post("/users", (createUserController.handle))
router.post("/tags", ensureAdmin, (createTagController.handle))

export { router }