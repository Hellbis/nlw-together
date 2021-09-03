import { Request, Response, NextFunction } from "express"
import { verify } from "jsonwebtoken"

interface IPayload {
    sub: string
}

export function ensureAuthenticated(request: Request, response: Response, nextFunction: NextFunction) {
    const authToken = request.headers.authorization
    
    if(!authToken){
        return response.status(401).end()
    }

    const [, token] = authToken.split(" ")

    try{
        const { sub } = verify(token, process.env.tokenHash) as IPayload
        
        request.user_id = sub

        return nextFunction()
    }
    catch(err){
        return response.status(401).end()
    }
}