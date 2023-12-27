const router = require('express').Router()
import userController = require('../controllers/userController');
import customLogger = require('../middleware/logger');

// ROUTE IS USE TO CONTROL MIDDLEWARE

/* GET users */
router.get('/:id', customLogger, userController.getUser)

/* CREATE user */
router.post('', customLogger, userController.createUser)

export {router};
