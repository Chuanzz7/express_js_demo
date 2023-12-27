import createError from 'http-errors';
import express, {NextFunction} from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import validateEnv from '@utils/validateEnv'
import * as dotenv from 'dotenv'
import cors from 'cors'
import helmet from 'helmet'
import {router as userRouter} from '@routers/users';
import {router as indexRouter} from '@routers/index';


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
app.use(helmet());
app.use(cors());

app.use('', indexRouter)
app.use('user', userRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

module.exports = app;


