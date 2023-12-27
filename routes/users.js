const router = require('express').Router()
const userController = require('../controllers/userController')
const customLogger = require('../middleware/logger')

// ROUTE IS USE TO CONTROL MIDDLEWARE

/* GET users */
router.get('/:id', customLogger, userController.getUser)

/* CREATE user */
router.post('', customLogger, userController.createUser)

module.exports = router;
