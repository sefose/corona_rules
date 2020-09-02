package de.f73.regulationdataserver.controller;

import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import de.f73.regulationdataserver.models.Regulation;
import de.f73.regulationdataserver.service.RegulationdataService;

/**
 * RegulationdataController
 */
@RestController
public class RegulationdataController {

    @Autowired
    RegulationdataService regulationdataService;

    @GetMapping("/regulations")
    public ResponseEntity<Collection<Regulation>> getAllRegulations() {
        return new ResponseEntity<>(regulationdataService.findAll(), HttpStatus.OK);
    }

    @GetMapping("/regulations/{stateName}")
    public ResponseEntity<Regulation> getRegulation(@PathVariable String stateName) {
        if (regulationdataService.stateNameIsValid(stateName)) {
            return new ResponseEntity<>(regulationdataService.getRegulationByName(stateName), HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @GetMapping("/states")
    public ResponseEntity<String[]> getAllStates() {
        return new ResponseEntity<>(regulationdataService.findAllStates(), HttpStatus.OK);
    }

}