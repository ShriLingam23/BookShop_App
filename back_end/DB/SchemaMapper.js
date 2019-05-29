const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AuthorSchema = new Schema({
    firstName:{
        type:String,
        require:true
    },
    lastName:{
        type:String,
        require:true
    },
    nationality:{
        type:String,
        require:true
    }
})

const BookSchema = new Schema({
    name:{
        type:String,
        require:true
    },
    isbn:{
        type:Number,
        require:true
    },
    author:{
        type:Schema.Types.ObjectId,
        ref:'Author'
    },
    price:{
        type:Number,
        require:true
    },
    yearOfPublication:{
        type:Number,
        require:true
    },
    publisher:{
        type:String,
        require:true
    }
})

mongoose.model('Author',AuthorSchema);
mongoose.model('Book',BookSchema);

mongoose.connect('mongodb://localhost:27017/pp2017',{useNewUrlParser:true})
    .then(
        ()=>console.log("Database connected successfully"),
        (err)=>console.log("Unable to connect to Database")
    );


module.exports = mongoose;