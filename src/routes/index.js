import { Router } from 'express';
import { validate, generate } from './middleware';

export default ({ config }) => {
	let routes = Router();

	routes.post('/',
		validate, generate
	);

	return routes;
}
