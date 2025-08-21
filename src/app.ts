import express from 'express';
import authorRoutes from '../src/routes/author.route'

const app=express();

const port=3000;

app.use(express.json());

app.use('/author',authorRoutes)


app.listen(port,()=>{

    console.log("server running on port ", port)
})

