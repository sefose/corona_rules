package de.f73.regulationserviceapi.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import de.f73.regulationserviceapi.models.Regulation;
import de.f73.regulationserviceapi.persistence.RegulationsRepository;

@Service
public class RegulationsService {

    @Autowired
    RegulationsRepository regulationsRepository;

	public List<Regulation> findAll() {
		return regulationsRepository.findAll();
	}

	public Regulation findByStateName(String state) {
		Optional<Regulation> regulationOpt = regulationsRepository.findByStateName(state);
		if (regulationOpt.isPresent()) {
			return  regulationOpt.get();
		}
		return null;
	}

	public void save(List<Regulation> regulations) {
		regulationsRepository.saveAll(regulations);
	}

	public Regulation save(Regulation regulation) {
		return regulationsRepository.save(regulation);
	}

	public void deleteByState(String state) {
		regulationsRepository.delete(findByStateName(state));
	}


    
}