import { Router, Request, Response } from 'express'
import { CreateUserController } from './controller/CreateUserController'
import { CreateTagController } from './controller/CreateTagController'
import { ensureAdmin } from './middlewares/ensureAdmin'
import { AuthenticateUserController } from './controller/AuthenticateUserController'
import { CreateComplimentController } from './controller/CreateComplimentController'

const router = Router()

const createUserController = new CreateUserController()
const createTagController = new CreateTagController()
const authenticateUserController = new AuthenticateUserController()
const createComplimentsController = new CreateComplimentController()

router.get('/', (request: Request, response: Response) => {
    return response.json({ message: 'Bem vindo a api!'})
})

router.post("/users", (createUserController.handle))
router.post("/tags", ensureAdmin, (createTagController.handle))
router.post("/login", authenticateUserController.handle)
router.post("/compliments", createComplimentsController.handle)

export { router }