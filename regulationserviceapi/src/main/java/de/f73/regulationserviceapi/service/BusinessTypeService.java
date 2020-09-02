package de.f73.regulationserviceapi.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import de.f73.regulationserviceapi.persistence.BusinessTypeRepository;

@Service
public class BusinessTypeService {

    @Autowired
    private BusinessTypeRepository businessTypeRepository;

    public List<String> getBusinessTypes() {
        return businessTypeRepository.findAll().stream().map(bt -> bt.getType()).distinct().collect(Collectors.toList());
    }
    
}
