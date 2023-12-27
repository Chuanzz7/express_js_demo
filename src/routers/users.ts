import {Router} from 'express';
import userController = require('../controllers/userController');

// ROUTE IS USE TO CONTROL MIDDLEWARE
export const router = Router();

/* GET users */
router.get('/:id', (req, res) => {
    res.send("test");
});

// /* CREATE user */
// router.post('', userController.createUser)
