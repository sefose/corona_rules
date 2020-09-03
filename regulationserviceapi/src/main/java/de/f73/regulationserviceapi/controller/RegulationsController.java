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
import org.springframework.web.bind.annotation.RequestHeader;

@Controller
public class RegulationsController {

    @Autowired
    private RegulationsService regulationsService;

    @GetMapping("/regulations")
    public ResponseEntity<List<Regulation>> getRegulations() {
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

    @PostMapping(value = "/regulations")
    public ResponseEntity<Void> postRegulations(@RequestBody List<Regulation> regulations,
            @RequestHeader("user") String user, @RequestHeader("password") String password) {
        if (authorize(user, password)) {
            regulationsService.save(regulations);
            return ResponseEntity.status(HttpStatus.CREATED).build();
        }
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
    }

    @PostMapping(value = "regulations/{state}")
    public ResponseEntity<Regulation> postRegulation(@PathVariable String state, @RequestBody Regulation regulation,
            @RequestHeader("user") String user, @RequestHeader("password") String password) {
        if (authorize(user, password)) {
            Regulation savedRegulation = regulationsService.save(regulation);
            return new ResponseEntity<>(savedRegulation, HttpStatus.CREATED);
        }
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
    }

    @DeleteMapping("regulations/{state}")
    public ResponseEntity<Void> deleteRegulation(@PathVariable String state) {
        regulationsService.deleteByState(state);
        return ResponseEntity.status(HttpStatus.OK).build();
    }

    @GetMapping("/stateNames")
    public ResponseEntity<List<String>> getStateNames() {
        List<String> stateNames = regulationsService.getStateNames();
        return new ResponseEntity<>(stateNames, HttpStatus.OK);
    }

    private boolean authorize(String user, String password) {
        return "import".equals(user) && "importpassword".equals(password);
    }

}