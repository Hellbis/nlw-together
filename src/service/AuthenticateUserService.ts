import { getCustomRepository } from "typeorm";
import { UsersRepositorio } from "../repositorio/UsersRepositorio";
import { compare } from 'bcryptjs'
import { sign } from 'jsonwebtoken'

interface IAuthenticateRequest{
    email: string
    password: string
}

class AuthenticateUserService{
    async execute({email, password}: IAuthenticateRequest){
        const usersRepositorio = getCustomRepository(UsersRepositorio)

        const user = await usersRepositorio.findOne({
            email
        })

        if(!user){
            throw new Error("Email/Password incorrect")
        }
        
        const result = await compare(password, user.password)

        if(!result){
            throw new Error("Email/Password incorrect")
        }

        const token = sign({
            email: user.email
        }, process.env.tokenHash, {
            subject: user.id,
            expiresIn: "1d"
        })
        
        return token
    }
}

export {AuthenticateUserService}