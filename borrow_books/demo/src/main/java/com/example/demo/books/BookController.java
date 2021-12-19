package com.example.demo.books;


import com.example.demo.users.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path= "books")
@CrossOrigin("*")
public class BookController {

    private final BookService bookservice;

    @Autowired
    public BookController(BookService bookservice) {
        this.bookservice = bookservice;
    }




//    git books in same type
    @GetMapping("/department/{id}")

    public List<Book> findBookstype(@PathVariable int id){

        return bookservice.findBookstype(id);
    }

    //    git books in same lendor
    @GetMapping("/booklender/{id}")
    public List<Book> findBookslendor(@PathVariable int id){
        return bookservice.findBookslendor(id);
    }
    @PostMapping
    public Book addBook(@RequestBody Form form){
        return bookservice.addBook(form.getBook(),form.getBookLenderId(), form.getTypeId());
    }

    @GetMapping
    public List<Book> getBooks(){
        return bookservice.getBooks();
    }



    @PutMapping("/update/{id}")
    public Book UpdateState(@PathVariable String id, @RequestBody Book book) {
        return bookservice.UpdateState(id,book);}


    }

class Form{
    private Book book;
    private int typeId;
    private  int bookLenderId;

    public Book getBook() {
        return book;
    }
    public int getTypeId() {
        return typeId;
    }

    public int getBookLenderId() {
        return bookLenderId;
    }
}
