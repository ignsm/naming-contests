import config from './config';
import sassMiddleware from 'node-sass-middleware';
import path from 'path';
import apiRouter from './api';

import express from 'express';
const server = express();

server.use(sassMiddleware({
  src: path.join(__dirname, 'src/sass'),
  dest: path.join(__dirname, 'public')
}));

server.set('view engine', 'ejs');

import serverRender from './serverRender';

server.get('/', (req, res) => {
  serverRender()
    .then(content => {
      res.render('index', {
        content
      });
    })
    .catch(err => console.error(err));
});

server.use('/api', apiRouter);
server.use(express.static('public'));

server.listen(config.port, config.host, () => {
  console.info(`Express listening on ${config.port}`);
});
