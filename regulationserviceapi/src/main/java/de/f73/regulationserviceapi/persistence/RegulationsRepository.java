package de.f73.regulationserviceapi.persistence;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import de.f73.regulationserviceapi.models.Regulation;

@Repository
public interface RegulationsRepository extends JpaRepository<Regulation, String> {

	Optional<Regulation> findByStateName(String state);
    
}