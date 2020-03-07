import 'reflect-metadata'

import express from 'express'
import path from 'path'

import sassMiddleware from 'node-sass-middleware';

import indexRouter from './routes/index'

const app = express()

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(sassMiddleware({
  src: path.join(__dirname, 'public'),
  dest: path.join(__dirname, 'public'),
  indentedSyntax: false, // true = .sass and false = .scss
  sourceMap: true
}));
app.use(express.static(path.join(__dirname, 'public')));  

app.use('/', indexRouter)

// app.use(function (req, res, next) {
//   next(createError(404))
// })

export default app
