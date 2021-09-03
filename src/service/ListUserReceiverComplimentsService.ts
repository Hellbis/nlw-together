import { getCustomRepository } from "typeorm"
import { ComplimentsRepositorio } from "../repositorio/ComplimentsRepositorio"


class ListUserReceiverComplimentsService {
    async execute(user_id: string){
        const complimentsRepositorio = getCustomRepository(ComplimentsRepositorio)

        const compliments = await complimentsRepositorio.find({
            where: {
                user_receiver: user_id
            },
            relations: ["userSender", "userReceiver", "tag"]
        })

        return compliments
    }
}

export { ListUserReceiverComplimentsService }