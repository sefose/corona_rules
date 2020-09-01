package de.f73.regulationdataserver.service;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Random;

import org.springframework.stereotype.Service;

import de.f73.regulationdataserver.models.BusinessType;
import de.f73.regulationdataserver.models.Regulation;

@Service
public class RegulationdataService {

    private String[] states = { "Baden-Württemberg", "Bayern", "Berlin", "Brandenburg", "Bremen", "Hamburg", "Hessen",
            "Mecklenburg-Vorpommern", "Niedersachsen", "Nordrhein-Westfalen", "Rheinland-Pfalz", "Saarland", "Sachsen",
            "Sachsen-Anhalt", "Schleswig-Holstein", "Thüringen" };

    private String[] businessTypes = { "Restaurants", "Bars", "Bordelle", "Tätowierstudios", "Schulen", "Turnhallen",
            "Fitnessstudios", "Internet-Cafes", "Bowlingbahnen", "Spielplätze", "Schulen", "Kindergärten" };

    private String[] furtherRestrictions = {"Wenn Corona-Positiver eintrifft, auf den Boden legen und auf Hilfe warten", "Personen die niesen, müssen 14 Tage in Quarantäne", "Urlauber werden gebeten, ihren Urlaub bis auf weiteres zu verlängern"};

    public boolean stateNameIsValid(String stateName) {
        return Arrays.asList(states).stream().anyMatch(stateName::equals);
    }
    
    public ArrayList<Regulation> findAll() {
        ArrayList<Regulation> regulations = new ArrayList<>();
        for (String stateName : states) {
            regulations.add(createRegulation(stateName));
        }
        return regulations;
    }
    
    public String[] findAllStates() {
        return states;
    }

    public Regulation getRegulationByName(String stateName) {
        return createRegulation(stateName);
    }

    private Regulation createRegulation(String stateName) {
        Regulation regulation = new Regulation();
        regulation.setStateName(stateName);
        regulation.setMaxPersonsIndoor(createRandomInt(20));
        regulation.setMaxPersonsOutdoor(regulation.getMaxPersonsIndoor() + createRandomInt(10));
        regulation.setMaxHouseholdsIndoor(createRandomInt(15));
        regulation.setMaxHouseholdsOutdoor(regulation.getMaxHouseholdsIndoor() + createRandomInt(5));
        regulation.setMaskRequired(Math.random() < 0.5);
        regulation.setClosedBusinesses(createClosedBusinesses());
        regulation.setMaxAttendeesIndoor(((double)createRandomInt(20))/10);
        regulation.setMaxAttendeesOutdoor(regulation.getMaxAttendeesIndoor() + ((double)createRandomInt(10))/10);
        regulation.setFurtherRestrictions(furtherRestrictions[createRandomInt(furtherRestrictions.length)-1]);
        return regulation;
    }

    private ArrayList<BusinessType> createClosedBusinesses() {
        ArrayList<BusinessType> businesses = new ArrayList<>();
        for (int i = 0; i < businessTypes.length; i++) {
            if(Math.random() < 0.5) {
                businesses.add(new BusinessType(businessTypes[i]));
            }
        }
        return businesses;
    }

    private int createRandomInt(int max) {
        Random random = new Random();
        return 1 + random.nextInt(max);
    }


}