import { getCustomRepository } from "typeorm"
import { ComplimentsRepositorio } from "../repositorio/ComplimentsRepositorio"
import { UsersRepositorio } from "../repositorio/UsersRepositorio"

interface IComplimentRequest {
    tag_id: string
    user_sender: string
    user_receiver: string
    message: string
}

class CreateComplimentService {
    async execute({tag_id, user_sender, user_receiver, message}: IComplimentRequest){
        const complimentRepositorio = getCustomRepository(ComplimentsRepositorio)

        const userRepositorio = getCustomRepository(UsersRepositorio)

        if( user_sender === user_receiver){
            throw new Error("User receiver and seder does not equals!")
        }

        const userReceiverExists = await userRepositorio.findOne({
            id: user_receiver
        })

        if(!userReceiverExists){
            throw new Error("User receiver does not exists!")
        }

        const compliment = complimentRepositorio.create({
            tag_id,
            user_sender,
            user_receiver,
            message
        })

        await complimentRepositorio.save(compliment)
        return compliment
    }
}

export { CreateComplimentService }