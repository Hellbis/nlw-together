import { Router, Request, Response } from 'express'
import { CreateUserController } from './controller/CreateUserController'
import { CreateTagController } from './controller/CreateTagController'
import { ensureAdmin } from './middlewares/ensureAdmin'
import { AuthenticateUserController } from './controller/AuthenticateUserController'
import { CreateComplimentController } from './controller/CreateComplimentController'
import { ensureAuthenticated } from './middlewares/ensureAuthenticated'
import { ListUserReceiverComplimentsController } from './controller/ListUserReceiverComplimentsController'
import { ListUserSendComplimentsController } from './controller/ListUserSendComplimentsController'
import { ListTagsController } from './controller/ListTagsController'

const router = Router()

const createUserController = new CreateUserController()
const createTagController = new CreateTagController()
const authenticateUserController = new AuthenticateUserController()
const createComplimentsController = new CreateComplimentController()
const listUserReceiverComplimentsController = new ListUserReceiverComplimentsController()
const listUserSendComplimentsController = new ListUserSendComplimentsController()
const listTagsController = new ListTagsController()


router.get('/', (request: Request, response: Response) => {
    return response.json({ message: 'Bem vindo a api!'})
})

router.post("/users", (createUserController.handle))

router.post(
    "/tags", 
    ensureAuthenticated, 
    ensureAdmin, 
    createTagController.handle
)

router.post("/login", authenticateUserController.handle)

router.post(
    "/compliments", 
    ensureAuthenticated, 
    createComplimentsController.handle
)

router.get("/user/compliments/send", ensureAuthenticated,  listUserSendComplimentsController.handle)
router.get("/user/compliments/receiver", ensureAuthenticated, listUserReceiverComplimentsController.handle)
router.get("/tags", ensureAuthenticated, listTagsController.handle)

export { router }
