import express from 'express'
import cors from 'cors'
import path from 'path'
import favicon from 'express-favicon'
import request from 'request'

const PORT = process.env.PORT || 8000;

const app = express();
app.use(favicon(__dirname + '/build/favicon.ico'));

app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'build')));
app.use(cors({origin: true, credentials: true}));

app.get('/ping', function (req, res) {
  return res.send('pong');
});

app.use('/api', function(req, res) {
  req.pipe(request(req.query.directUrl)).pipe(res);
});

app.get('/tripData', (req, res) => {
  res.status(200).sendFile(path.join(__dirname, 'build', 'data.json'))
});

const key = 'AIzaSyDS5nV5nNisxsr_kWTu-p8Lay7rfialZHw';
app.get('/tripData/map', (req, res) => {
  req.pipe(request(`https://maps.googleapis.com/maps/api/js?key=${key}&libraries=drawing&language=en&region=EG`)).pipe(res);
});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(PORT, () => console.info(`Server has started on ${PORT}`));