const express = require('express');
const app = express();
require('dotenv').config();

const PORT = process.env.PORT || 4000;

//middleware to pass the data

app.use(express.json());

const userRouter = require('./routes/todo');

//mount router
app.use('/api/v1', userRouter);

app.listen(PORT, ()=>{
    console.log(`http://localhost:${PORT}`)
})

//connect the db
const dbConnect = require('./config/database');
dbConnect();

//default router
app.get('/', (req, res)=>{
    res.send(`<h3>This is the Home Page</h3>`)
})
