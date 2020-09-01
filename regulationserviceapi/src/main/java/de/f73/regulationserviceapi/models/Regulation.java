package de.f73.regulationserviceapi.models;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class Regulation {
    
    // @Id
    // @GeneratedValue(strategy = GenerationType.IDENTITY)
    // private Long id;
    @Id
    String stateName;
    int maxPersonsIndoor;
    int maxPersonsOutdoor;
    int maxHouseholdsIndoor;
    int maxHouseholdsOutdoor;
    boolean maskRequired;
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "regulation")
    List<BusinessType> closedBusinesses;
    Double maxAttendeesIndoor;
    Double maxAttendeesOutdoor;
    String furtherRestrictions;
}
