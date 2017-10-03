import config from './config';
import sassMiddleware from 'node-sass-middleware';
import path from 'path';
// import apiRouter from './api';

import express from 'express';
const server = express();

server.use(sassMiddleware({
  src: path.join(__dirname, 'src/sass'),
  dest: path.join(__dirname, 'public')
}));

server.set('view engine', 'ejs');

server.get('/', (req, res) => {
  res.render('index', {
    content: 'Hello, React!'
  });
});

// server.use("/api", apiRouter);
server.use(express.static('public'));

server.listen(config.port, () => {
  console.info(`Express listening on ${config.port}`);
});
