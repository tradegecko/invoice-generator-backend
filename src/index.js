import path from 'path';
import http from 'http';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import routes from './routes';
import config from './config.json';

let app = express();
app.server = http.createServer(app);

// 3rd party middleware
app.use(cors({
	exposedHeaders: config.corsHeaders
}));

app.use(bodyParser.json({
	limit : config.bodyLimit
}));
app.use(bodyParser.urlencoded({
	extended: false, limit: config.bodyLimit
}));

app.use(express.static(path.join(__dirname, 'public')));
app.use('/', routes({ config }));

app.server.listen(process.env.PORT || config.port, () => {
	console.log(`Listening on port ${process.env.PORT || config.port}`)
});

export default app;
