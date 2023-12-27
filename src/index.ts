import createError from 'http-errors';
import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import validateEnv from '@utils/validateEnv'
import * as dotenv from 'dotenv'
import {router as userRouter} from '@routers/users';


const contextPath = '/api'
const app = express();

//App Varaibles
dotenv.config()

validateEnv();


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
// index.use(customLogger);
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('user', userRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
// @ts-ignore
// index.use(function (err: Error, req: Request, res: Response, next: NextFunction) {
//     // set locals, only providing error in development
//     res.err.message = err.message;
//     res.locals.error = req.index.get('env') === 'development' ? err : {};
//
//     // render the error page
//     res.status(err.status || 500);
//     res.render('error');
// });

module.exports = app;


