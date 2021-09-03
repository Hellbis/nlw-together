import { getCustomRepository } from "typeorm"
import { ComplimentsRepositorio } from "../repositorio/ComplimentsRepositorio"


class ListUserSendComplimentsService {
    async execute(user_id: string){
        const complimentsRepositorio = getCustomRepository(ComplimentsRepositorio)

        const compliments = await complimentsRepositorio.find({
            where: {
                user_sender: user_id
            },
            relations: ["userSender", "userReceiver", "tag"]
        })

        return compliments
    }
}

export { ListUserSendComplimentsService }