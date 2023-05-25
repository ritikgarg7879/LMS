const express=require('express');
const { v4: uuidv4 } = require('uuid');

const router=express.Router();


//Creating an array to add bookInfo
let books=[];

//Getting details of all the books
router.get("/",(req,res)=>{
    res.send(books);
})


//Adding new books
router.post("/",(req,res)=>{
    const book=req.body;
    const bookId=uuidv4();
    const bookWithID={...book,id:uuidv4()}
    books.push(bookWithID);
    res.send(`Book with id ${bookWithID.id} and title ${bookWithID.title}  is added`);
})


//Getting information about a particular book with the help of book id
router.get("/:id",(req,res)=>{
    const {id}=req.params;
    const foundBook=books.find((book)=>book.id==id);
    res.send(foundBook);
})


//Deleting a particular book on the basis of its id 
router.delete("/:id",(req,res)=>{
    const {id}=req.params;
    books=books.filter((book)=>book.id!=id);
    res.send(`Book with id ${id} is deleted`)
})


//Updating the info about a particular book with the help of its id 
router.patch("/:id",(req,res)=>{
    const {id}=req.params;
    const {title,author}=req.body;
    const bookToBeUpdated=books.find((book)=>book.id===id);

    if(title){
        bookToBeUpdated.title=title;
    }
    if(author){
        bookToBeUpdated.author=author;
    }

    res.send(`user with the id ${id} updated`);
})

module.exports = router;

