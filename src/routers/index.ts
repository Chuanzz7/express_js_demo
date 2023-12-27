import {Router} from 'express';

export const router = Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.send("Hello World")
});