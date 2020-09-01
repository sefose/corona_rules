package de.f73.regulationserviceapi.persistence;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import de.f73.regulationserviceapi.models.BusinessType;

@Repository
public interface BusinessTypeRepository extends JpaRepository<BusinessType, String> {
    
}