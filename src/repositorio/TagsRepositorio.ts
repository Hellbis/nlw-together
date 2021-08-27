import { Entity, EntityRepository, Repository } from "typeorm"
import { Tag } from "../entity/Tag"

@EntityRepository(Tag)
class TagsRepositorio extends Repository<Tag> {
    
}

export { TagsRepositorio }