package de.f73.regulationdataserver.models;

import java.util.ArrayList;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class Regulation {
    String stateName;
    int maxPersonsIndoor;
    int maxPersonsOutdoor;
    int maxHouseholdsIndoor;
    int maxHouseholdsOutdoor;
    boolean maskRequired;
    ArrayList<BusinessType> closedBusinesses;
    Double maxAttendeesIndoor;
    Double maxAttendeesOutdoor;
    String furtherRestrictions;
}
