package com.example.demo.users;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface userRepository  extends JpaRepository<User, Integer> {

    public User findByphoneNumber(String phoneNumber);

}
