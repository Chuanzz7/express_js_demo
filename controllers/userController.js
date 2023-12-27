// Methods to be executed on routes
const userService = require('../services/UserService')
const getUser = (req, res)=>{
    res.json(userService.getUserById(req.params.id))
}

const createUser = (req, res)=>{
    res.send("Hello User Created");
}

// Export of all methods as object
module.exports = {
    getUser,
    createUser
}