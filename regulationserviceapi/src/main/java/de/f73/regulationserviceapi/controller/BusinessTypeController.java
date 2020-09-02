package de.f73.regulationserviceapi.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

import de.f73.regulationserviceapi.service.BusinessTypeService;

@Controller
public class BusinessTypeController {

    @Autowired
    BusinessTypeService businessTypeService;

    @GetMapping("/businessTypes")
    public ResponseEntity<List<String>> getBusinessTypes() {
        List<String> stateNames = businessTypeService.getBusinessTypes();
        return new ResponseEntity<>(stateNames, HttpStatus.OK);
    }
}
