import express from 'express';
import authorRoutes from '../src/routes/author.route';
import bookRoutes from '../src/routes/book.route';

const app=express();

const port=3000;

app.use(express.json());

app.use('/author',authorRoutes)
app.use("/books", bookRoutes);


app.listen(port,()=>{

    console.log("server running on port ", port)
})

