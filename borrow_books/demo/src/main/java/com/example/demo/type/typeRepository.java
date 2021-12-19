package com.example.demo.type;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface typeRepository extends JpaRepository<Type, Integer> {

}
