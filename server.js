import express from 'express';
import http from 'http';
import { connectDB } from './Database/firebaseconfig.js';
import sensordata from './Routes/sensordata.js'
import signupRouter from './Routes/signup.js';
import cors from 'cors';


const app = express();
app.use(express.json()); 
app.use(cors());
const server = http.createServer(app);

// app.use('/signin', signinRouter);
app.use('/signup', signupRouter);
app.use('/sensordata', sensordata);


connectDB().then(() => {
    server.listen(5000, () => {
        console.log('Server is running on port 5000');
    });
})

