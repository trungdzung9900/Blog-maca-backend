import express from 'express'
import bodyParser from 'body-parser';
import cors from 'cors';
import post from './routes/post.js';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config()

const URL = process.env.DATABASE_URL
const app = express();
const PORT = process.env.port || process.env.PORT;
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({extended: true, limit: '50mb'})) // limit the data size client post
app.use(cors());
app.use('/post',post)
mongoose.connect(URL,{ useNewUrlParser: true, useUnifiedTopology: true}).then(()=>{
    console.log('Connected DB');
    app.listen(PORT,()=> {
        console.log( `Server is running on port: ${PORT}`);
    })
})
.catch((err) =>{
    console.log(err);
})

