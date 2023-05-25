const express=require('express');
const { v4: uuidv4 } = require('uuid');

const router=express.Router();



let ArrayOfbook=[];


router.get("/",(req,res)=>{
    res.send(ArrayOfbooks);
})



router.post("/",(req,res)=>{
    const book=req.body;
    const bookId=uuidv4();
    const bookWithID={...book,id:uuidv4()}
    books.push(bookWithID);
    res.send(`Book with id ${bookWithID.id} and title ${bookWithID.title}  is added`);
})



router.get("/:id",(req,res)=>{
    const {id}=req.params;
    const foundBook=ArrayOfbooks.find((book)=>book.id==id);
    res.send(foundBook);
})



router.delete("/:id",(req,res)=>{
    const {id}=req.params;
    ArrayOfbooks=ArrayOfbooks.filter((book)=>book.id!=id);
    res.send(`Book with id ${id} is deleted`)
})



router.patch("/:id",(req,res)=>{
    const {id}=req.params;
    const {title,author}=req.body;
    const Updatedbook=ArrayOfbooks.find((book)=>book.id===id);

    if(title){
        Updatedbook.title=title;
    }
    if(author){
        Updatedbook.author=author;
    }

    res.send(`user with the id ${id} updated`);
})

module.exports = router;

