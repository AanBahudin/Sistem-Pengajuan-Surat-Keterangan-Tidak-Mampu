import 'express-async-errors'
import express from 'express';
import mongoose from 'mongoose';
import * as dotenv from 'dotenv';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import cloudinary from 'cloudinary'
import path from 'path'
import { fileURLToPath } from 'url';
import fs from 'fs'

// FOR TESTING PORPOSED 
import Data from './models/DataModel.js'

// app route
import authRouter from './router/authRoute.js';
import dataRouter from './router/dataRoute.js';
import kelurahanRoute from './router/kelurahanDataRoute.js';
import rtRoute from './router/rtRoute.js'
import userRouter from './router/userRoute.js';

// middleware
import errorHandlerMiddleware from './errors/ErrorHandler.js';
import { authenticatedUser } from './middleware/authMiddleware.js';
// using package
const app = express();
dotenv.config();
app.use(cookieParser());
if (process.env.NODE_ENV !== "production") app.use(morgan("dev"));
app.use(express.json());


cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API_KEY,
    api_secret: process.env.CLOUD_API_SECRET
})

// route

// DELETE IF THE PROJECT IS DONE
app.get('/clean_data', async(req, res) => {
    await Data.deleteMany();
    res.status(StatusCodes.OK).json({msg: 'data_clened!'})
})

app.use('/api/v1/auth', authRouter);
app.use('/api/v1/data', authenticatedUser, dataRouter);
app.use('/api/v1/kelurahan', authenticatedUser, kelurahanRoute);    //  ADD OTHER MIDDLEWARE FOR CHECKING IF USER IS KELURAHAN TO ACCESS THIS ROUTE
app.use('/api/v1/rt', authenticatedUser, rtRoute)                   // ADD OTHER MIDDLEWARE FOR CHECKING IF USER IS RT TO ACCESS THIS ROUTE
app.use('/api/v1/user', authenticatedUser, userRouter);

app.use(errorHandlerMiddleware);

try {
    await mongoose.connect(process.env.DB_CONNECTION);
    app.listen(process.env.PORT || 5000, () => {
        console.log("Server is running");
    })
} catch (error) {
    console.log(error);
}