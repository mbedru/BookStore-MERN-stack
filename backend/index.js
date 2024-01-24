import express from "express";
import mongoose from "mongoose";
import { PORT, mongoDB_URI } from "./config.js";
import booksRoute from './routes/booksRoute.js';
import cors from 'cors'

const app = express();

//Middleware for parsing request body
app.use(express.json());

//Middleware for handling CORS POLICY
//option 1: Allow All Origins
//if we dont mention inside cors() ->> the Default of cors is ALL* cors(*)
app.use(cors());
//option 2: Allow Custom Origins
// app.use(
//     cors({
//         origin: 'http://localhost:3000',
//         methods: ['GET', 'POST', 'PUT', 'DELETE'],
//         allowedHeaders: ['Content-Type'],
//     })
// );

app.get('/', (req, res) => {
    console.log(req);
    return res.status(234).send('Welcome this Tutorial');
});

app.use('/books', booksRoute);

mongoose
    .connect(mongoDB_URI)
    .then(() => {
        console.log('connected to DB');
        app.listen(PORT, () => {
            console.log(`app is listening to port: ${PORT}`);
        });
    })
    .catch((error) => {
        console.log(error);
    });