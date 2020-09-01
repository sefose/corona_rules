package de.f73.regulationserviceapi.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import de.f73.regulationserviceapi.models.Regulation;
import de.f73.regulationserviceapi.service.RegulationsService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;



@Controller
public class RegulationsController {

    @Autowired
    RegulationsService regulationsService;
    
    @GetMapping("/regulations")
    public ResponseEntity<List<Regulation>> getRegulations () {
        List<Regulation> regulations = regulationsService.findAll();
        return new ResponseEntity<>(regulations, HttpStatus.OK);
    }

    @GetMapping("/regulations/{stateName}")
    public ResponseEntity<Regulation> getRegulation(@PathVariable String stateName) {
        Regulation regulation = regulationsService.findByStateName(stateName);
        if (regulation != null) {
            return new ResponseEntity<>(regulation, HttpStatus.OK);
        }
        return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
    }

    @PostMapping(value="/regulations")
    public ResponseEntity<Void> postRegulations(@RequestBody List<Regulation> regulations) {
        regulationsService.save(regulations);
        return ResponseEntity.status(HttpStatus.CREATED).build();
    }

    @PostMapping(value="regulations/{state}")
    public ResponseEntity<Regulation> postRegulation(@PathVariable String state, @RequestBody Regulation regulation) {
        Regulation savedRegulation = regulationsService.save(regulation);
        return new ResponseEntity<>(savedRegulation, HttpStatus.CREATED);
    }

    @DeleteMapping("regulations/{state}")
    public ResponseEntity<Void> deleteRegulation(@PathVariable String state) {
        regulationsService.deleteByState(state);
        return ResponseEntity.status(HttpStatus.OK).build();
    }
    
}