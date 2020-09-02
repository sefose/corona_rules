package de.f73.regulationserviceapi.models;

import java.sql.Date;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import org.hibernate.annotations.UpdateTimestamp;

import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class Regulation {
    
    @Id
    String stateName;
    int maxPersonsIndoor;
    int maxPersonsOutdoor;
    int maxHouseholdsIndoor;
    int maxHouseholdsOutdoor;
    boolean maskRequired;
    @OneToMany(cascade = CascadeType.ALL)
    List<BusinessType> closedBusinesses;
    Double maxAttendeesIndoor;
    Double maxAttendeesOutdoor;
    String furtherRestrictions;
    @UpdateTimestamp
    @Temporal(TemporalType.TIMESTAMP)
    private Date modifyDate;
}
