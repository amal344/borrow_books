package com.example.demo.books;



import com.example.demo.type.Type;
import com.example.demo.type.typeRepository;
import com.example.demo.users.User;
import com.example.demo.users.userRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BookService {

    private final bookRepository bookrepository;
    private final typeRepository typerepository;
    private final userRepository userrepository;

    @Autowired
    public BookService(bookRepository bookrepository,typeRepository typerepository,userRepository userrepository) {
        this.bookrepository = bookrepository;
        this.typerepository=typerepository;
        this.userrepository=userrepository;
    }

    public Book addBook(Book book, int bookLenderId,int typeId ){
        System.out.println(bookLenderId);
        Type type=typerepository.findById(typeId).orElse(null);
        User user=userrepository.findById(bookLenderId).orElse(null);
        System.out.println(user);
        book.setUser(user);
        book.setType(type);
        System.out.println(book);

        return bookrepository.save(book);
    }




    public List<Book> getBooks(){

        return  bookrepository.findAll();
    }

    public List<Book> findBookstype(int typeId){
        return bookrepository.findAllBytype_id(typeId);
    }

    public List<Book> findBookslendor(int lendorId){
        return bookrepository.findAllByuser_id(lendorId);
    }


    public Book UpdateState(String id , Book bookState){
        int Id = Integer.parseInt(id);
        Book book = bookrepository.findById(Id).orElse(null);
        if (book != null){
            book.setState(bookState.getState());
            bookrepository.save(book);
        }
        return book;
    }


}
