package com.example.demo.users;


import com.example.demo.books.Book;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path= "users")
@CrossOrigin("*")
public class UserController {

    private final UserService userservice;

    @Autowired
    public UserController(UserService userservice) {
        this.userservice = userservice;
    }



    @PostMapping
    public User addUser(@RequestBody User user){
        return userservice.addUser(user);
    }


    @GetMapping
    public List<User> getUsers(){
        return userservice.getUsers();
    }

    @DeleteMapping ("/{id}")
    public List<User> deleteUser(@PathVariable int id){
        userservice.deleteUser(id);
        return getUsers();

    }
    @PutMapping("/{id}")
    public User updateNumberOfBorrowing(@PathVariable String id) {
        return userservice.updateNumberOfBorrowing(id);}


}

