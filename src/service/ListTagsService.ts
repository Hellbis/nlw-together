import { getCustomRepository } from "typeorm";
import { TagsRepositorio } from "../repositorio/TagsRepositorio";


class ListTagsService {
    async execute(){
        const tagsRepositorios = getCustomRepository(TagsRepositorio)

        const tags = await tagsRepositorios.find()

        return tags
    }
}

export { ListTagsService }