import express from 'express';
import bodyParser from 'body-parser';
import routes from './routes';
import session from 'express-session'
import cookieSession from 'cookie-session'
const app = express();

app.use(cookieSession({
  name: 'session',
  keys: ['key1', 'key2']
}))
// View engine setup

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept,Authorization")
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE")
  next();
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/public'));
// Routes
app.use('/', routes);

// Catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// Error handler
app.use((err, req, res, next) => { // eslint-disable-line no-unused-vars
  res
    .status(err.status || 500)
    .render('error', {
      message: err.message
    });
});

export default app;
