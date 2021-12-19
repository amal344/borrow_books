package com.example.demo.books;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface bookRepository extends JpaRepository<Book, Integer> {

    List<Book> findAllBytype_id(int type_id);
    List<Book> findAllByuser_id(int user_id);


}
