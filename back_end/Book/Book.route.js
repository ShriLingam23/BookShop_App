const mongoose = require('../DB/SchemaMapper');
const BookSchema = mongoose.model('Book');

const express = require('express');
const router = express.Router();

router.post('/',(req,res)=>{

    const book = new BookSchema(req.body);
    book.save()
        .then(
            ()=>res.status(200).send({'message':"Successfully saved","data":book}),
            (err)=>res.status(400).send({'message':"Unsuccessful"+err})
        )
})

router.get('/',(req,res)=>{
    BookSchema.find().populate('author').exec()
        .then(
            (books)=>res.status(200).send({'message':"Successfully retrived","data":books})
        )
        .catch(
            (err)=>res.status(400).send({'message':"Unsuccessful"+err})
        )
})

router.get('/:id',(req,res)=>{
    BookSchema.findById(req.params.id).populate('author').exec()
        .then(
            (book)=>res.status(200).send({'message':"Successfully retrived","data":book})
        )
        .catch(
            (err)=>res.status(400).send({'message':"Unsuccessful"+err})
        )
})

router.put('/:id',(req,res)=>{
    BookSchema.update({_id:req.params.id},req.body)
        .then(
            (book)=>res.status(200).send({'message':"Successfully updated","data":book})
        )
        .catch(
            (err)=>res.status(400).send({'message':"Unsuccessful"+err})
        )
})

router.delete('/:id',(req,res)=>{
    BookSchema.remove({_id:req.params.id})
        .then(
            ()=>res.status(200).send({'message':"Successfully deleted"})
        )
        .catch(
            (err)=>res.status(400).send({'message':"Unsuccessful"+err})
        )
})


module.exports= router;