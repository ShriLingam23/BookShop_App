const mongoose = require('../DB/SchemaMapper');
const AuthorSchema = mongoose.model('Author');

const express = require('express');
const router = express.Router();

router.post('/',(req,res)=>{

    const author = new AuthorSchema(req.body);
    author.save()
        .then(
            ()=>res.status(200).send({'message':"Successfully saved","data":author}),
            (err)=>res.status(400).send({'message':"Unsuccessful"+err})
        )
})

router.get('/',(req,res)=>{
    AuthorSchema.find((err,authors)=>{
        if(!err){
            res.status(200).send({'message':"Successfully retrived","data":authors})
        }else
            res.status(400).send({'message':"Unsuccessful"+err})
    })
})


module.exports= router;