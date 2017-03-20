import { Router } from 'express';

export default ({ config, db }) => {
	let translations = Router();

	translations.get('/', (req, res) => {
		res.json(' alo alo');
	});

	return translations;
}
