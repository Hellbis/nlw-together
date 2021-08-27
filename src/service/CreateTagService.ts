import { getCustomRepository } from "typeorm"
import { TagsRepositorio } from "../repositorio/TagsRepositorio"



class CreateTagService {
    async execute(name: string){
        const tagsRepositorio = getCustomRepository(TagsRepositorio)
        
        if(!name){
            throw new Error("Incorrect name!")
        }
        
        const tagAlreadyExists = await tagsRepositorio.findOne({
            name
        })

        if(tagAlreadyExists){
            throw new Error("Tag already existis!")
        }

        const tag = tagsRepositorio.create({
            name
        })

        await tagsRepositorio.save(tag)

        return tag
    }
}

export { CreateTagService }