package com.example.demo.borrowings;


import com.example.demo.books.Book;
import com.example.demo.books.bookRepository;
import com.example.demo.type.Type;
import com.example.demo.type.typeRepository;
import com.example.demo.users.User;
import com.example.demo.users.userRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BorrowingService {
    private final borrowingRepository borrowingrepository;
    private final bookRepository bookrepository;
    private final userRepository userrepository;

    @Autowired
    public BorrowingService(borrowingRepository borrowingrepository, bookRepository bookrepository, userRepository userrepository) {
        this.borrowingrepository = borrowingrepository;
        this.bookrepository = bookrepository;
        this.userrepository = userrepository;
    }

    public Borrowing addBorrowing(Borrowing borrowing, int borroerId,int bookid){

        Book book =bookrepository.findById(bookid).orElse(null);
        User user=userrepository.findById(borroerId).orElse(null);
        borrowing.setBook(book);
        borrowing.setUser(user);
        return borrowingrepository.save(borrowing);
    }


    public List<Borrowing> getBorrowings(){

        return  borrowingrepository.findAll();
    }
    public List<Borrowing> findBorrowing(int borrwoerId){
        return borrowingrepository.findAllByuser_id(borrwoerId);
    }




}
