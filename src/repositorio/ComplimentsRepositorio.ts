import { EntityRepository, Repository } from "typeorm";
import { Compliment } from "../entity/Compliment";

@EntityRepository(Compliment)
class ComplimentsRepositorio extends Repository<Compliment> {

}

export { ComplimentsRepositorio }