package com.example.demo.users;


import com.example.demo.books.Book;
import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.security.core.authority.SimpleGrantedAuthority;
//import org.springframework.security.core.userdetails.UserDetails;
//import org.springframework.security.core.userdetails.UserDetailsService;
//import org.springframework.security.core.userdetails.UsernameNotFoundException;
//import org.springframework.security.crypto.password.PasswordEncoder;

import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

@Service
public class UserService {

    private final userRepository userrepository;
//    private final PasswordEncoder passwordEncoder;

    @Autowired
    public UserService(userRepository userrepository) {
        this.userrepository = userrepository;
//        this.passwordEncoder=passwordEncoder;

    }


//    @Override
//    public UserDetails loadUserByUsername(String phoneNumber) throws UsernameNotFoundException {
//        User user = userrepository.findByphoneNumber(phoneNumber);
//        if(user  == null){
//            throw new UsernameNotFoundException("User not found in the database");
//        }
//        Collection<SimpleGrantedAuthority> authorities = new ArrayList<>();
//        user.getRoles().forEach(role -> {
//            authorities.add(new SimpleGrantedAuthority(role.getName()));
//        });
//////        ask
//        return new org.springframework.security.core.userdetails.User(user.getPhoneNumber(), user.getPassword(), authorities);
//    }



    public User updateNumberOfBorrowing(String id ){
        int Id = Integer.parseInt(id);
        User user = userrepository.findById(Id).orElse(null);
        if (user != null){
            user.setNumberOfBorrowing(user.getNumberOfBorrowing()+1);
            userrepository.save(user);
        }
        return user;
    }
    public User addUser(User user){



        return userrepository.save(user);
    }


    public List<User> getUsers(){

        return  userrepository.findAll();
    }

    public void deleteUser(int id){

        userrepository.deleteById(id);
    }
}
