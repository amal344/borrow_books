package com.example.demo.borrowings;


import com.example.demo.books.Book;
import com.example.demo.type.Type;
import com.example.demo.users.User;

import javax.persistence.*;

@Entity
@Table(name = "borrowings")
public class Borrowing {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private int loanNumber;
    private String borrowingDate;
    private String redeliveryDate;
    @ManyToOne(fetch = FetchType.EAGER, optional = true)
    @JoinColumn(name = "book_id")
    private Book book;
    @ManyToOne(fetch = FetchType.EAGER, optional = true)
    @JoinColumn(name = "user_id")
    private User user;

    public Borrowing(int id, int loanNumber, String borrowingDate, String redeliveryDate, Book book, User user) {
        this.id = id;
        this.loanNumber = loanNumber;
        this.borrowingDate = borrowingDate;
        this.redeliveryDate = redeliveryDate;
        this.book = book;
        this.user = user;
    }

    public Borrowing() {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getLoanNumber() {
        return loanNumber;
    }

    public void setLoanNumber(int loanNumber) {
        this.loanNumber = loanNumber;
    }

    public String getBorrowingDate() {
        return borrowingDate;
    }

    public void setBorrowingDate(String borrowingDate) {
        this.borrowingDate = borrowingDate;
    }

    public String getRedeliveryDate() {
        return redeliveryDate;
    }

    public void setRedeliveryDate(String redeliveryDate) {
        this.redeliveryDate = redeliveryDate;
    }

    public Book getBook() {
        return book;
    }

    public void setBook(Book book) {
        this.book = book;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}
