package com.example.demo.type;


import com.example.demo.users.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TypeService {

    private final typeRepository typerepository;


    @Autowired
    public TypeService(typeRepository typerepository) {
        this.typerepository = typerepository;
    }

    public void addTypes(List<Type> types){
        for(int i=0;i<types.size();i++){
            typerepository.save(types.get(i));}
    }



    public List<Type> getTypes(){

        return  typerepository.findAll();
    }


}

