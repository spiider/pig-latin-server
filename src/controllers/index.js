import { version } from '../../package.json';
import { Router } from 'express';
import translations from './translations';

export default ({ config, db }) => {
	let api = Router();

	// translations resource
	api.use('/translations', translations({ config, db }));

	// perhaps expose some API metadata at the root
	api.get('/', (req, res) => {
		res.json({ version });
	});

	return api;
}
