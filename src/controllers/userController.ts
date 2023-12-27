// Methods to be executed on routes
import userService = require('../services/UserService');
import {Request, Response} from "express";

const getUser = async (req: Request, res: Response) => {
    const user = userService.getUserById(parseInt(req.params.id));
    if (user === null) {
        return res.sendStatus(404);
    }
    res.send(user)
}

const createUser = (req: Request, res: Response) => {
    res.send("Hello User Created");
}

// Export of all methods as object
export {getUser, createUser}