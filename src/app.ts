import express from 'express';
import { initApp } from '@startup/initialize';

const app = express();
const environment = process.env.NODE_ENV || 'development';

initApp(app, environment);

export default app;
