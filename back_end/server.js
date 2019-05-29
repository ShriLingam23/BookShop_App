const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors());

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));


const authorRouter = require('./Author/Author.route');
app.use('/author',authorRouter);

const bookRouter = require('./Book/Book.route');
app.use('/book',bookRouter);

app.listen(4000,(err)=>{
    console.log("Server listening at port : 4000");
})