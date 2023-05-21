import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from 'dotenv';

import UserRoute from "./routes/UserRoute.js";

import path from 'path';

const __dirname = path.dirname('./.env');

// const path = require('path');
// dotenv.config({ path: path.resolve(__dirname) });
dotenv.config({ path: path.resolve(__dirname, './.env') });

const app = express();
mongoose
.connect(process.env.MONGODB_URL)
.then(() => console.log(`Connected To MongoDB..`))
.catch((err) => console.log(err))

app.use(cors());
app.use(express.json());
app.use(UserRoute);

app.listen(5000, () => console.log('Server up and running')); // callback consol log
