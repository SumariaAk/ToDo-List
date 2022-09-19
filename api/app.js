import express from 'express';
import mongoose from 'mongoose';
import cookieParser  from 'cookie-parser';
import routes from './routes/index.js';
import models from './models/index.js';

//Creating an express
const app = express();
//Defining the mongoose connection url 
mongoose.connect('mongodb://localhost:27017/todoresource'); //connected to mongodb
//Letting the app to support json, cookieparser, urlencoded
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());  
//routes the express app
routes(app);
//default export
export default app;