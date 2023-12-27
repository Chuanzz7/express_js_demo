import moment from 'moment';
import {NextFunction, Request, Response} from 'express';

const logger = (req: Request, res: Response, next: NextFunction) => {
    console.log(`Custom Logger Example - ${moment().format()}`)
    next();
};
export {logger}