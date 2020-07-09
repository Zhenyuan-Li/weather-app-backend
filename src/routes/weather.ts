import Router from 'express';

import { welcome, fetchWeather } from '../controllers/weather';

const router = Router();

router.get('/', welcome);
router.get('/weather', fetchWeather);

export default router;
