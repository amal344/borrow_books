package com.example.demo.type;


import com.example.demo.users.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path= "types")
@CrossOrigin("*")
public class TypeController {

    private final TypeService typeservice;


    @Autowired
    public TypeController(TypeService typeservice) {
        this.typeservice = typeservice;
    }

    @GetMapping
    public List<Type> getTypes(){
        return typeservice.getTypes();
    }


    @PostMapping("/s")
    public List<Type> addDepartments(@RequestBody List<Type> types){
        typeservice.addTypes(types);
        return getTypes();
    }


}


