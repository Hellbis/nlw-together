import { EntityRepository, Repository } from "typeorm";
import { User } from "../entity/User"

@EntityRepository(User)
class UsersRepositorio extends Repository<User>{
      
}

export { UsersRepositorio }