const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, '/public')));

app.use((req, res, next) => {
    res.show = (name) => {
      res.sendFile(path.join(__dirname, `/views/${name}`));
    };
    next();
  });

  app.use('/user', (req, res, next) => {
    res.show('forbidden.html')
  });


app.get('/', (req, res) => {
    res.show('index.html')
  });

app.get('/Home', (req, res) => {
    res.show('index.html');
  });

app.get('/about', (req, res) => {
    res.show('about.html');
  });

app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, './views/404.html'));
  })

app.listen(8000, () => {
    console.log('Server running port 8000')
})