package com.example.demo.borrowings;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface borrowingRepository extends JpaRepository<Borrowing, Integer> {


    List<Borrowing> findAllByuser_id(int borrower_id);
}
