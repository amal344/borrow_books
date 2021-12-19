package com.example.demo.borrowings;


import com.example.demo.books.Book;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path= "borrowings")
@CrossOrigin("*")
public class borrowingController {

    private final BorrowingService borrowingservice;


    @Autowired
    public borrowingController(BorrowingService borrowingservice) {
        this.borrowingservice = borrowingservice;
    }


    @PostMapping
    public Borrowing addBorrowing(@RequestBody Form form){
        return borrowingservice.addBorrowing(form.getBorrowing(), form.getBorrowerId(),form.getBookId());
    }


    @GetMapping("/borrwoer/{id}")
    public List<Borrowing> findBorrowing(@PathVariable int id){

        return borrowingservice.findBorrowing(id);
    }



}
class Form{
    private Borrowing borrowing;
    private int bookId;
    private  int borrowerId;

    public Borrowing getBorrowing() {
        return borrowing;
    }

    public int getBookId() {
        return bookId;
    }

    public int getBorrowerId() {
        return borrowerId;
    }
}
