const express = require('express');
const nunjucks = require('nunjucks');

const server = express();
const videos = require('./data');

server.use(express.static('public'));

server.set('view engine', 'njk');

nunjucks.configure('views', {
  express: server,
  noCache: true,
});

server.get('/', (req, res) => {
  const about = {
    avatar_url: 'https://avatars0.githubusercontent.com/u/60191127?s=460&u=842d8bad32341bf621212df473d9e7ff5ab27b3d&v=4',
    name: 'Edson Corral',
    role: 'Desenvolvedor Front-end',
    description: 'Programador JavaScript/ReactJS.',
    links: [
      { name: 'Github' },
      { name: 'LinkedIn' },
      { name: 'Twitter' },
    ],
  };

  return res.render('about', { about });
});

server.get('/portfolio', (req, res) => res.render('portfolio', { items: videos }));

server.get('/video', (req, res) => {
  const { id } = req.query;

  const video = videos.find((video) => (video.id === id));

  if (!video) {
    return res.send('Video not found!!!');
  }

  return res.render('video', { item: video });
});

server.listen(5000, () => {
  console.log('Server is running!!!');
});
