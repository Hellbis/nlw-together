import { NextFunction, request, Request, Response} from 'express'
import { getCustomRepository } from 'typeorm'
import { UsersRepositorio } from '../repositorio/UsersRepositorio'

export async function ensureAdmin(req: Request, res: Response, next: NextFunction){
    const { user_id } = req

    const userRepositorios = getCustomRepository(UsersRepositorio)

    const { admin } = await userRepositorios.findOne(user_id)

    if(admin){
        return next() 
    }

    return res.status(401).json({
        error: "Unauthorized"
    })

}