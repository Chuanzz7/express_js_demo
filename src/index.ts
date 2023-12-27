import createError from 'http-errors';
import express, {NextFunction} from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';

const contextPath = '/api'
const index = express();


// view engine setup
index.set('views', path.join(__dirname, 'views'));
index.set('view engine', 'pug');
// index.use(customLogger);
index.use(logger('dev'));
index.use(express.json());
index.use(express.urlencoded({extended: false}));
index.use(cookieParser());
index.use(express.static(path.join(__dirname, 'public')));

index.use('/', require('./routes'));
index.use(`${contextPath}/users`, require('./routes/users'));

// catch 404 and forward to error handler
index.use(function (req, res, next) {
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

module.exports = index;
