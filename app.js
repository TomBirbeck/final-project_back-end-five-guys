import createError from 'http-errors';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import * as url from 'url';
import indexRouter from './routes/index.js';
import usersRouter from './routes/users.js';

import express from 'express';
import cors from 'cors';
const app = express();
// const PORT = process.env.PORT;
// app.use('/', indexRouter);

app.use(cors());
app.use(logger('dev'));

app.use(express.json());
app.use('/', usersRouter);
// app.listen(PORT);

app.get('/users/:id', (req, res) => {
  //payload will be query on all of the notes of the user based on req.params.id
  //pool.query('Select * from notes join profile on notes.userID=profile.userID')
  res.json({ sucess: true, payload: 'you wish' });
});

export default app;

// const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
// const app = express();

// // view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');

// app.use(logger('dev'));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', indexRouter);
// app.use('/users', usersRouter);

// // catch 404 and forward to error handler
// app.use(function (req, res, next) {
//   next(createError(404));
// });

// // error handler
// app.use(function (err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

// export default app;
